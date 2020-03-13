import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as R from 'ramda';

import {
  fetchEconomicData as fetchEconomicDataAction,
  setFetchStatus as setFetchStatusAction,
  clearEconomicData as clearEconomicDataAction,
} from '../actions/economic-data';
import { getDate, isEmptyOrNil } from '../helpers/util';

const getParam = pathname => R.last(R.split('/')(pathname));

export class MacroEconomicUI extends Component {
  state = {
    selectedDate: new Date(),
    pathname: null,
  };

  static getDerivedStateFromProps(props, state) {
    const { pathname: prevPathname } = state;
    const {
      fetchEconomicData,
      location: { pathname: currentPathname },
    } = props;
    const indicator = getParam(currentPathname);

    if (!R.equals(currentPathname, prevPathname) && !isEmptyOrNil(indicator)) {
      console.log('getDervied...');
      fetchEconomicData({
        date: getDate(state.selectedDate),
        indicator,
      });

      return { ...state, pathname: currentPathname };
    }

    return null;
  }

  componentDidMount() {
    const { selectedDate } = this.state;
    const {
      fetchEconomicData,
      location: { pathname: currentPathname },
    } = this.props;

    const indicator = getParam(currentPathname);

    if (!isEmptyOrNil(indicator)) {
      console.log('componentDidMount...');
      fetchEconomicData({
        date: getDate(selectedDate),
        indicator,
      });
    }
  }

  // shouldComponentUpdate({
  //   location: { pathname: prevPathname },
  // },
  // { selectedDate: prevSelectedDate }) {
  //   const {
  //     location: { pathname: currentPathname },
  //   } = this.props;
  //   const { selectedDate: currentSelectedDate } = this.state;
  //   // console.log(prevPathname, currentPathname);
  //   // console.log(!R.equals(prevPathname, currentPathname));

  //   return !R.equals(prevPathname, currentPathname)
  //     || !R.equals(prevSelectedDate, currentSelectedDate);
  // }

  componentDidUpdate(prevProps, prevState) {
    const { selectedDate: prevDate } = prevState;
    const { selectedDate } = this.state;

    if (!R.equals(selectedDate, prevDate)) {
      const {
        fetchEconomicData,
        location: { pathname },
      } = this.props;

      fetchEconomicData({
        date: getDate(selectedDate),
        indicator: getParam(pathname),
      });
    }
  }

  componentWillUnmount() {
    const { clearEconomicData, setFetchStatus } = this.props;

    setFetchStatus({ message: null, value: null });
    clearEconomicData();
  }

  setDate = newDate => this.setState(prevState => ({
    ...prevState,
    selectedDate: newDate,
  }))

  render() {
    const { selectedDate } = this.state;
    const {
      children,
      macroEconomic,
      location: { pathname },
    } = this.props;

    return children({
      pathname,
      selectedDate,
      macroEconomic,
      setDate: this.setDate,
    });
  }
}

const mapStateToProps = ({
  macroEconomic,
}) => ({
  macroEconomic,
});

const mapDispatchToProps = {
  fetchEconomicData: fetchEconomicDataAction,
  setFetchStatus: setFetchStatusAction,
  clearEconomicData: clearEconomicDataAction,
};

export const MacroEconomic = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(MacroEconomicUI));

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as R from 'ramda';

import {
  fetchEconomicData as fetchEconomicDataAction,
  clearEconomicData as clearEconomicDataAction,
} from '../actions/economic-data';
import { getDate, isEmptyOrNil } from '../helpers/util';

const getParam = pathname => R.last(R.split('/')(pathname));

export class MacroEconomicUI extends PureComponent {
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
      fetchEconomicData({
        date: getDate(selectedDate),
        indicator,
      });
    }
  }

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
    const { clearEconomicData } = this.props;

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
      isInProgress,
      location: { pathname },
      economicData,
    } = this.props;

    return children({
      pathname,
      selectedDate,
      isInProgress,
      economicData,
      setDate: this.setDate,
    });
  }
}

const mapStateToProps = ({
  macroEconomic: {
    isInProgress,
    economicData,
  },
}) => ({
  isInProgress,
  economicData,
});

const mapDispatchToProps = {
  fetchEconomicData: fetchEconomicDataAction,
  clearEconomicData: clearEconomicDataAction,
};

export const MacroEconomic = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(MacroEconomicUI));

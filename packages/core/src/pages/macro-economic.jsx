import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as R from 'ramda';

import { fetchEconomicData as fetchEconomicDataAction } from '../actions/economic-data';
import { getDate } from '../helpers/util';

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

    if (!R.equals(currentPathname, prevPathname)) {
      fetchEconomicData({
        date: getDate(state.selectedDate),
        indicator: getParam(currentPathname),
      });

      return { ...state, pathname: currentPathname };
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedDate: prevDate } = prevState;
    const { selectedDate } = this.state;

    if (!R.equals(selectedDate, prevDate)) {
      const { fetchEconomicData, location: { pathname } } = this.props;

      fetchEconomicData({
        date: getDate(selectedDate),
        indicator: getParam(pathname),
      });
    }
  }

  setDate = newDate => this.setState(prevState => ({
    ...prevState,
    selectedDate: newDate,
  }))

  render() {
    const { selectedDate } = this.state;
    const { children, location: { pathname } } = this.props;

    console.log(this.props, 'this. props');

    return children({
      pathname,
      selectedDate,
      setDate: this.setDate,
    });
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
  fetchEconomicData: fetchEconomicDataAction,
};

export const MacroEconomic = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(MacroEconomicUI));

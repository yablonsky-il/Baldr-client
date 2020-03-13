import React, { useState, useEffect, memo } from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import * as R from 'ramda';

import {
  fetchEconomicData,
  clearEconomicData,
} from '../actions/economic-data';
import { getDate } from '../helpers/util';

export const MacroEconomicUI = ({
  children,
}) => {
  const dispatch = useDispatch();
  const { indicator } = useParams();
  const { pathname } = useLocation();
  const selectedState = useSelector(({ macroEconomic }) => macroEconomic);
  const [{ selectedDate }, setState] = useState({
    selectedDate: new Date(),
  });
  const setDate = newDate => setState(prevState => ({
    ...prevState,
    selectedDate: newDate,
  }));

  useEffect(() => {
    dispatch(fetchEconomicData({
      date: getDate(selectedDate),
      indicator,
    }));

    return () => dispatch(clearEconomicData());
  }, [dispatch, indicator, pathname, selectedDate]);

  return children({
    pathname,
    selectedDate,
    macroEconomic: selectedState,
    setDate,
  });
};

export const MacroEconomic = MacroEconomicUI;

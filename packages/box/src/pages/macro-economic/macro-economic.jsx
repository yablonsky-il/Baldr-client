import React, { useEffect, memo } from 'react';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';

import { withCore } from 'core/hocs/with-core-component';
// import { MacroEconomic as MacroEconomicCore } from 'core/pages/macro-economic';
import { MacroEconomic as MacroEconomicCore } from 'core/pages/macro-economic-hooks';
import { isEmptyOrNil } from 'core/helpers/util';
import { setFetchStatus } from 'core/actions/economic-data';

import { EconomicDataTabs } from '../../components/economic-data-tabs/economic-data-tabs';
import { EconomicDataTable } from '../../components/economic-data-table/economic-data-table';
import { DatePicker } from '../../components/date-picker/date-picker';
import { Charts } from '../../components/economic-data-table/charts';

export const MacroEconomicUI = ({
  macroEconomic,
  selectedDate,
  pathname,
  setDate,
}) => {
  const {
    status: { message, value },
    economicData,
  } = macroEconomic;
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  console.log(economicData, 'data');

  useEffect(() => {
    if (!isEmptyOrNil(message)) {
      enqueueSnackbar(message, {
        variant: value,
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      });
    }

    return () => dispatch(setFetchStatus({ message: null, value: null }));
  }, [pathname, selectedDate, message, value, enqueueSnackbar, dispatch]);

  return (
    <Container maxWidth="xl" className="p-0">
      <div>
        <EconomicDataTabs isInProgress={macroEconomic.isInProgress} />
        <DatePicker
          autoOk
          className="mt-4"
          inputVariant="outlined"
          label="With keyboard"
          value={selectedDate}
          onChange={setDate}
        />
        <div className="w-100 d-flex">
          <EconomicDataTable pathname={pathname} macroEconomic={macroEconomic} />
          <Charts economicData={economicData} />
        </div>
      </div>
    </Container>
  );
};

MacroEconomicUI.propTypes = {
  macroEconomic: PropTypes.shape({
    isInProgress: PropTypes.bool.isRequired,
    isFetched: PropTypes.bool.isRequired,
    economicData: PropTypes.shape({}).isRequired,
  }).isRequired,
  selectedDate: PropTypes.shape({}).isRequired,
  pathname: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
};

// const MacroEconomic = withCore(MacroEconomicCore, MacroEconomicUI);

export default memo(
  withCore(MacroEconomicCore, MacroEconomicUI),
  (prev, current) => {
    console.log(prev, current, 'prev-current');

    return false;
  },
);

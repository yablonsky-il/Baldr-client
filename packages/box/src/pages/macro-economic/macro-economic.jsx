import React from 'react';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';

import { withCore } from 'core/hocs/with-core-component';
import { MacroEconomic as MacroEcomoicCore } from 'core/pages/macro-economic';

import { EconomicDataTabs } from '../../components/economic-data-tabs/economic-data-tabs';
import { EconomicDataTable } from '../../components/economic-data-table/economic-data-table';
import { DatePicker } from '../../components/date-picker/date-picker';

export const MacroEconomicUI = ({
  isInProgress,
  economicData,
  selectedDate,
  pathname,
  setDate,
}) => (
  <Container maxWidth="xl" className="p-0">
    <div>
      <EconomicDataTabs isInProgress={isInProgress} />
      <DatePicker
        autoOk
        className="mt-4"
        inputVariant="outlined"
        label="With keyboard"
        value={selectedDate}
        onChange={setDate}
      />
    </div>
    <EconomicDataTable
      pathname={pathname}
      economicData={economicData}
    />
  </Container>
);

MacroEconomicUI.propTypes = {
  isInProgress: PropTypes.bool.isRequired,
  economicData: PropTypes.shape({}).isRequired,
  selectedDate: PropTypes.shape({}).isRequired,
  pathname: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
};

const MacroEconomic = withCore(MacroEcomoicCore, MacroEconomicUI);

export default MacroEconomic;

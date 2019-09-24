import React from 'react';
import Container from '@material-ui/core/Container';

import { withCore } from 'core/hocs/with-core-component';
import { MacroEconomic as MacroEcomoicCore } from 'core/pages/macro-economic';

import { EconomicDataTabs } from '../components/economic-data-tabs/economic-data-tabs';
import { EconomicDataTable } from '../components/economic-data-table/economic-data-table';
import { DatePicker } from '../components/date-picker/date-picker';

export const MacroEconomicUI = ({
  economicData,
  selectedDate,
  pathname,
  setDate,
}) => (
  <Container maxWidth="xl" className="p-0">
    <div>
      <EconomicDataTabs />
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

export const MacroEconomic = withCore(MacroEcomoicCore, MacroEconomicUI);

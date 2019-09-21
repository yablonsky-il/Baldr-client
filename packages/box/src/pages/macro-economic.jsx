import React from 'react';
import Container from '@material-ui/core/Container';

import { withCore } from 'core/hocs/with-core-component';
import { MacroEconomic as MacroEcomoicCore } from 'core/pages/macro-economic';

import { EconomicDataTabs } from '../components/economic-data-tabs/economic-data-tabs';
import { EconomicDataTable } from '../components/economic-data-table/economic-data-table';
import { DatePicker } from '../components/date-picker/date-picker';

class MacroEconomicUI extends React.Component {
  render() {
    const {
      selectedDate,
      pathname,
      setDate,
  } = this.props;

  console.log(this.props, 'this. props from box');

    return (
      <div>
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
        />
      </Container>
      </div>
    );
  }
}

export const MacroEconomic = withCore(MacroEcomoicCore, MacroEconomicUI);

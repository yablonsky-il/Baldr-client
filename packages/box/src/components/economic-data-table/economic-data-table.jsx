import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import { isEmptyOrNil } from 'core/helpers/util';

const columnKeys = {
  stocks: 'stock',
  currency: 'currency',
  inflation: 'country',
  commodities: 'commoditie',
  'interest-rate': 'country',
  'sales-tax-rate': 'country',
  'corruption-rank': 'country',
  'corporate-tax-rate': 'country',
  'government-debt-to-GDP': 'country',
  'personal-income-tax-rate': 'country',
};

const getColumns = indicator => ([
  { id: 'id', label: 'ID', minWidth: 200 },
  { id: 'country', label: columnKeys[indicator], minWidth: 200 },
  { id: 'value', label: 'VALUE', minWidth: 200 },
]);

const ROWS_AMOUNT = 15;

export const EconomicDataTable = ({
  pathname,
  economicData: { date, data, indicator },
}) => {
  if (isEmptyOrNil(data)) return null;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(ROWS_AMOUNT);
  const thValue = columnKeys[indicator];

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  return (
    <Paper className="mt-2">
      <div>
        <Table stickyHeader>
          <TableHead>
            <TableRow className="text-uppercase">
              {getColumns(indicator).map(column => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(rowData => (
              <TableRow hover role="checkbox" tabIndex={-1} key={rowData.id}>
                <TableCell>{rowData.id}</TableCell>
                <TableCell>{rowData[thValue]}</TableCell>
                <TableCell>{rowData.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'previous page',
        }}
        nextIconButtonProps={{
          'aria-label': 'next page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export class EconomicDataTable extends Component {
  state = {};

  static getDerivedStateFromProps(props) {
    const { pathname } = props;

    return null;
  }

  render() {
    // console.log(this.props, 'render');
    const { pathname } = this.props;

    return (
      <div>{pathname}</div>
    );
  }
}

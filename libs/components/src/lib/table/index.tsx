/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { Paper } from '@mui/material';
import React from 'react';
import {
  DataGrid,
  GridColDef,
  GridPaginationModel,
  GridRowsProp,
} from '@mui/x-data-grid';

interface ITableProps {
  className?: string;
  rows: GridRowsProp;
  columns: GridColDef[];
  loading?: boolean;
  pagination?: true | undefined;
  paginationModel?: GridPaginationModel;
  checkboxSelection?: boolean
}

function Table({
  className,
  rows,
  columns,
  loading,
  pagination,
  paginationModel,
  checkboxSelection
}: ITableProps) {
  return (
    <Paper sx={{ height: 400, width: '100%' }} className={className}>
      <DataGrid
        checkboxSelection={checkboxSelection}
        rows={rows}
        columns={columns}
        loading={loading}
        pagination={pagination}
        paginationModel={paginationModel}
      />
    </Paper>
  );
}

export default Table;

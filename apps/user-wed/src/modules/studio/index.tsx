/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

'use client';
import PrimaryButton from '@libs/button';
import Table from '@libs/table';
import { Box, Container } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'status',
    headerName: 'Trạng thái',
    width: 100,
    renderCell: ({ value }) => {
      return <Box>{value}</Box>;
    },
  },
  {
    field: 'acitons',
    headerName: 'Tuỳ chọn',
    sortable: false,
    width: 160,
    cellClassName: 'actions',
    type: 'actions',
    getActions: ({ id }) => {
      return [<PrimaryButton key={1} icon="delete" />];
    },
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, status: 'public' },
  {
    id: 2,
    lastName: 'Lannister',
    firstName: 'Cersei',
    age: 42,
    status: 'draf',
  },
  {
    id: 3,
    lastName: 'Lannister',
    firstName: 'Jaime',
    age: 45,
    status: 'public',
  },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  {
    id: 5,
    lastName: 'Targaryen',
    firstName: 'Daenerys',
    age: null,
    status: 'public',
  },
  {
    id: 6,
    lastName: 'Melisandre',
    firstName: null,
    age: 150,
    status: 'public',
  },
  {
    id: 7,
    lastName: 'Clifford',
    firstName: 'Ferrara',
    age: 44,
    status: 'draf',
  },
  {
    id: 8,
    lastName: 'Frances',
    firstName: 'Rossini',
    age: 36,
    status: 'public',
  },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, status: 'public' },
];

const paginationModel = { page: 0, pageSize: 5 };

function Stuido() {
  return (
    <Container maxWidth="md">
      <Table
        checkboxSelection
        rows={rows}
        columns={columns}
        paginationModel={paginationModel}
      />
    </Container>
  );
}

export default Stuido;

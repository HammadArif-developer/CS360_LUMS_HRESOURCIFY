import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'id', label: 'ID', minWidth: 170 },
  { id: 'name', label: 'Name', minWidth: 170 },
  {
    id: 'department',
    label: 'Department',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString(),
  },
  {
    id: 'job',
    label: 'Job Title',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString(),
  },
];

function createData(id, name, department, job) {
  return { id, name, department, job};
}

const rows = [
  createData ('A007', 'Ramasundar', 'Marketing', 'Senior Manager'),
  createData ('A003', 'Alex ', 'Marketing', 'Manager'),
  createData ('A008', 'Alford', 'Marketing', 'Employee'),
  createData ('A011', 'Ravi Kumar', 'Marketing', 'Employee'),
  createData ('A010', 'Santakumar', 'IT', 'Manager'),
  createData ('A012', 'Lucida', 'HR', 'Senior Manager'),
  createData ('A005', 'Anderson', 'HR', 'Manager'),
  createData ('A001', 'Subbarao', 'IT', 'Employee'),
  createData ('A002', 'Mukesh', 'Sales', 'Manager'),
  createData ('A006', 'McDen', 'Sales', 'Manager'),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
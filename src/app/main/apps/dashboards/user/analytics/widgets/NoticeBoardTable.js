import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  head: {
    minWidth: 1650,
    backgroundColor: 'blue',
  },
  content: {
    paddingLeft: 0,
    paddingRight: 200
  },
  rows: {
    backgroundColor: '#f6f6f6',
    "& > *": {
      borderRight: "0.1rem solid #e9e9e9",
    }
  }
});

const columns = [
  { id: 'postDate', label: 'PostDate' },
  { id: 'content', label: 'Content' },
  { id: 'attachment', label: 'Attachment' },
  { id: 'username', label: 'Username' },
  { id: 'url', label: 'Url' },
  { id: 'update', label: 'Update' },
];

function createData(postDate, content, attachment, username, url, update) {
  return { postDate, content, attachment, username, url, update };
}

const rows = [
  createData('Nov.27', 'from full page', null, 'Admin Work', null, null),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} style={{ overflowX: 'hidden' }}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {columns.map((column) => {
              if (column.id === "postDate") {
                return <TableCell key={column.id} align="left" style={{ paddingRight: 0, width: 20 }}>{column.label}</TableCell>
              } else if (column.id === 'content') {
                return <TableCell key={column.id} align="left" style={{ paddingRight: 200 }}>{column.label}</TableCell>
              } else {
                return <TableCell key={column.id} align="left" style={{ width: 20 }}>{column.label}</TableCell>;
              }
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} className={classes.rows}>
              <TableCell align="left">{row.postDate}</TableCell>
              <TableCell align="left">{row.content}</TableCell>
              <TableCell align="left">{row.attachment}</TableCell>
              <TableCell align="left">{row.username}</TableCell>
              <TableCell align="left">{row.url}</TableCell>
              <TableCell align="left">{row.update}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
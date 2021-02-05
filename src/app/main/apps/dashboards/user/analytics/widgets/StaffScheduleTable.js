import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Card, Container } from '@material-ui/core'
import ArrowBack from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForward from '@material-ui/icons/ArrowForwardIosRounded';
import { DatePicker } from "@material-ui/pickers";
import EventIcon from '@material-ui/icons/Event';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
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
    },
    rowsContent: {
        "& > *": {
            borderRight: "0.1rem solid #e9e9e9",
        },
    },
    card: {
        height: 50,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '15px 15px',
        borderRadius: 'initial'
    },
    date: {
        '& .MuiInputBase-input': {
            color: '#6884c3',
            width: 115,
        },
        '& .MuiInput-underline:before': {
            borderBottom: 'none',
        },
        '& .MuiInput-underline:hover:before': {
            borderBottom: 'none',
        },
        '& .MuiInput-underline:after': {
            borderBottom: 'none',
        },
    },
    container: {
        width: 50,
        marginLeft: 5,
        marginRight: 0,
        paddingLeft: 5,
        paddingRight: 5,
    },
    container2: {
        width: 150,
        marginLeft: 0,
        marginRight: 5,
        paddingLeft: 5,
        paddingRight: 5,
    },
    button: {
        backgroundColor: '#6884c3',
        color: 'white',
        textTransform: 'initial'
    },
    cell:{
        display: 'flex', 
        alignItems: 'center',
    }
}));

const columns = [
    { id: 'name', label: 'Name' },
    { id: 'details', label: 'Details' },
];

function createData(avatar, name, details) {
    return { avatar, name, details };
}

const rows = [
    createData(<Avatar style={{marginRight: 10, backgroundColor: 'orange' }}>T</Avatar>,'test user 002', null),
    createData(<Avatar style={{marginRight: 10, backgroundColor: 'orange' }}>H</Avatar>,'Hasegawa Takahiro', null),
    createData(<Avatar style={{marginRight: 10, backgroundColor: 'green' }}>A</Avatar>,'Adhzm Samurai', null),
    createData(<Avatar style={{marginRight: 10, backgroundColor: 'green' }}>T</Avatar>,'test-AH-0', null),
    createData(<Avatar style={{marginRight: 10, backgroundColor: 'red' }}>U</Avatar>,'UTM-U', null),
    createData(<Avatar style={{marginRight: 10, backgroundColor: 'blue' }}>F</Avatar>,'Flynn', null),
    createData(<Avatar style={{marginRight: 10, backgroundColor: 'blue' }}>U</Avatar>,'upedndra-99', null),
];

export default function StaffScheduleTable() {
    const classes = useStyles();
    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <TableContainer component={Paper} style={{ overflowX: 'hidden' }}>
            <Card className={classes.card }>
                <Container className={classes.container}>
                    <ArrowBack fontSize="small" />
                    <ArrowForward fontSize="small" />
                </Container>
                <Button className={classes.button} variant="contained" size="small" >Today</Button>
                <Container className={classes.container2}>
                    <DatePicker
                        disableUnderline
                        views={["month", "date", "year"]}
                        format="MMMM D, yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        className={classes.date}
                    />
                    <EventIcon />
                </Container>

            </Card>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow className={classes.rows}>
                        {columns.map((column) => {
                            if (column.id === "name") {
                                return <TableCell key={column.id} align="left" style={{ width: 200 }}>{column.label}</TableCell>
                            } else {
                                return <TableCell key={column.id} align="left" style={{ paddingRight: 200 }}>{column.label}</TableCell>;
                            }
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name} className={classes.rowsContent}>
                            <TableCell align="left" className={classes.cell}>{row.avatar}{row.name}</TableCell>
                            <TableCell align="left">{row.details}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
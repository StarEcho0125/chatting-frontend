import _ from '@lodash';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import Table from './StaffScheduleTable'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(() => ({
	container: {
		display: 'flex',
		padding: '15px 15px',
		justifyContent: 'space-between',
		backgroundColor: "#6884c3",
		color: 'white',
	}
}));

function StaffSchedule(props) {
	const classes = useStyles();

	return (
		<Card className="w-full rounded-none shadow-none border-1">
			<Container className={classes.container} >
				<Typography> <PermContactCalendarIcon />Staff Schedule</Typography>
				<CreateIcon />
			</Container>
			<Table />
		</Card>
	);
}

export default React.memo(StaffSchedule);

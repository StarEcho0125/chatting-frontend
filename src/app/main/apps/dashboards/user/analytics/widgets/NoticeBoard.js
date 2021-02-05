import _ from '@lodash';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Table from './NoticeBoardTable'
import { makeStyles } from '@material-ui/core/styles';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import Modale from './NoticeBoardModale'


const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		padding: '15px 15px',
		justifyContent: 'space-between',
		alignItems:'center', 
		backgroundColor: "#6884c3",
		color: 'white',
	}
}));

function NoticeBoard(props) {
	const classes = useStyles();
	return (
		<Card className="w-full rounded-none shadow-none border-1">
			<Container className={classes.container} >
				<Typography > <SpeakerNotesIcon />Notice Board </Typography>
				<Modale />
			</Container>
			<Table />
		</Card>
	);
}

export default React.memo(NoticeBoard);

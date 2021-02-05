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
import { Doughnut } from 'react-chartjs-2';

function WeatherApp(props) {
	const theme = useTheme();
	const [dataset, setDataset] = useState('Today');
	const data = _.merge({}, props.data);

	return (
		<Card className="w-full rounded-8 shadow-none border-1">
			<div className="p-16">
				<Typography className="h1 font-300">Weather App</Typography>
			</div>

		</Card>
	);
}

export default React.memo(WeatherApp);

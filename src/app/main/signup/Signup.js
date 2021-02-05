import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import RegisterUser from './../pages/auth/register/RegisterPage'

const useStyles = makeStyles(theme => ({
	root: {
		background: `${theme.palette.background.paper}`,
		color: theme.palette.primary.contrastText
	}
}));

function Signup() {

	return (
		<RegisterUser />
	);
}

export default Signup;

import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import LoginUser from './../pages/auth/login/LoginPage'

const useStyles = makeStyles(theme => ({
	root: {
		background: `${theme.palette.background.paper}`,
		color: theme.palette.primary.contrastText
	}
}));

function Login() {

	return (
		<LoginUser />
	);
}

export default Login;

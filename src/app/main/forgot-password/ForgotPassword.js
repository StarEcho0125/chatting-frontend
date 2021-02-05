import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import ForgotPasswordPage from '../pages/auth/forgot-password/ForgotPasswordPage'

const useStyles = makeStyles(theme => ({
	root: {
		background: `${theme.palette.background.paper}`,
		color: theme.palette.primary.contrastText
	}
}));

function ForgotPassword() {

	return (
		<ForgotPasswordPage />
	);
}

export default ForgotPassword;

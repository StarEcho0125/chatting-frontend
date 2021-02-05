import FuseAnimate from '@fuse/core/FuseAnimate';
import { useForm } from '@fuse/hooks';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	root: {
		background: `radial-gradient(${theme.palette.background.paper} 100%, ${theme.palette.background.paper} 100%)`,
		color: theme.palette.primary.contrastText
	},
	containerPassword: {
		boxShadow: 'none',
		maxWidth: '600px',
		margin: 'auto',
		fontSize: '14px'
	},
	logo: {
		width: '100%',
		marginBottom: '12px'
	},
	logoLock:{
		width: '64px',
		margin: 'auto',
	},
	greyBox: {
		padding: '20px 20px',
		background: '#f9f9f9',
		border: 'solid thin #ccc',
		marginBottom: '35px',
		width: '100%',
		textAlign: 'center',
	},
	notif: {
		marginBottom: '10px',
		fontWeight: 'bold',
		fontSize: '14px',
		color: '#575757',
		'&:last-child':{
			marginBottom: '0px',
		}
	}
}));

function ForgotPasswordPage() {
	const classes = useStyles();
	const { form, handleChange, resetForm } = useForm({
		email: ''
	});

	function isFormValid() {
		return form.email.length > 0;
	}

	function handleSubmit(ev) {
		ev.preventDefault();
		resetForm();
	}

	return (
		<div className={clsx(classes.root, 'flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32')}>
			<div className="flex flex-col items-center justify-center w-full">
				<FuseAnimate animation="transition.expandIn">
					<Card className={clsx(classes.containerPassword, 'w-full max-w-640')}>
						<CardContent className="flex flex-col items-center justify-center p-32">
							
							<img className={classes.logo} src="assets/images/logos/scai_logo.svg" alt="logo" />
							
							<Typography variant="h6" className="mt-16">
								RESET YOUR PASSWORD
							</Typography>

							<div className="w-128 m-32">
								<img className={classes.logoLock} src="assets/images/logos/reset-logo.png" alt="reset logo" />
							</div>

							<div className={classes.greyBox}>
								<p className={classes.notif}>Enter your previously email registered.</p>
								<p className={classes.notif}>A generated code will be send to your email.</p>
							</div>

							<form
								name="recoverForm"
								noValidate
								className="flex flex-col justify-center w-full"
								onSubmit={handleSubmit}
							>
								<TextField
									className="mb-16"
									label="Email"
									autoFocus
									type="email"
									name="email"
									value={form.email}
									onChange={handleChange}
									variant="outlined"
									required
									fullWidth
								/>

								<Button
									variant="contained"
									color="primary"
									className="w-224 mx-auto mt-16"
									aria-label="Reset"
									disabled={!isFormValid()}
									type="submit"
								>
									SEND RESET LINK
								</Button>
							</form>

							<div className="flex flex-col items-center justify-center pt-32 pb-24">
								<Link className="font-medium" to="/login">
									Go back to login page
								</Link>
							</div>
						</CardContent>
					</Card>
				</FuseAnimate>
			</div>
		</div>
	);
}

export default ForgotPasswordPage;

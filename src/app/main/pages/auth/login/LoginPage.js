import FuseAnimate from '@fuse/core/FuseAnimate';
import { useForm } from '@fuse/hooks';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {submitLogin} from '../../../../auth/store/actions'

const useStyles = makeStyles(theme => ({
	root: {
		background: `radial-gradient(${theme.palette.background.paper} 100%, ${theme.palette.background.paper} 100%)`,
		color: theme.palette.primary.contrastText
	},
	containerLogin: {
		boxShadow: 'none',
		maxWidth: '600px',
		margin: 'auto',
		fontSize: '14px'
	},
	logo: {
		width: '100%',
		marginBottom: '12px'
	},
	forgotPassword: {
		textAlign: 'center',
		margin: 'auto'
	}
}));

function LoginPage() {
	const dispatch = useDispatch();
	const classes = useStyles();

	const [state, setState] = React.useState({
		email: '',
		password: '',
		remember: false,
	});

	function handleSubmit(ev) {
		ev.preventDefault();
	}

	const handleChange = (event) => {
		const name = event.target.name;
		setState({
			...state,
			[name]: event.target.value,
		});
	};
	function handleSubmit(ev) {
		ev.preventDefault();
		dispatch(submitLogin({ email: state.email, password: state.password }));
	}

	return (
		<div className={clsx(classes.root, 'flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32')}>
			<div className="flex flex-col items-center justify-center w-full">
				<FuseAnimate animation="transition.expandIn">
					<Card className={clsx(classes.containerLogin, 'w-full max-w-640')}>
						<CardContent className="flex flex-col items-center justify-center p-32">
							<img className={classes.logo} src="assets/images/logos/scai_logo.svg" alt="SCAI logo" />

							<form
								name="loginForm"
								className="flex flex-col justify-center w-full"
								onSubmit={handleSubmit}
							>
								<TextField
									className="mb-16"
									label="Email"
									autoFocus
									type="email"
									name="email"
									onChange={handleChange}
									variant="outlined"
									required
									fullWidth
								/>

								<TextField
									className="mb-16"
									label="Password"
									type="password"
									name="password"
									onChange={handleChange}
									variant="outlined"
									required
									fullWidth
								/>

								<div className="flex items-center justify-between hidden">
									<FormControl>
										<FormControlLabel
											control={
												<Checkbox
													name="remember"
													checked={state.remember}
													onChange={handleChange}
												/>
											}
											label="Remember Me"
										/>
									</FormControl>
								</div>

								<Link className={clsx(classes.forgotPassword, 'font-medium')} to="/forgot-password">
									Forgot Password?
								</Link>

								<Button
									variant="contained"
									color="primary"
									className="w-224 mx-auto mt-16"
									aria-label="LOG IN"
									type="submit"
								>
									LOGIN
								</Button>
							</form>

							<div className="flex flex-col items-center justify-center pt-32 pb-24">
								<span className="font-medium">Need an account?</span>
								<Link className="font-medium" to="/signup">
									Sign up now
								</Link>
							</div>
						</CardContent>
					</Card>
				</FuseAnimate>
			</div>
		</div>
	);
}

export default LoginPage;

import FuseAnimate from '@fuse/core/FuseAnimate';
import { useForm } from '@fuse/hooks';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import { Input, List, ListItem, ListItemText } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import {submitRegister} from '../../../../auth/store/actions'

const BootstrapInput = withStyles((theme) => ({
	input: {
		borderRadius: 0,
		position: 'relative',
		backgroundColor: "#fff",
		border: '1px solid #ced4da',
		fontSize: 16,
		padding: '10px 26px 10px 12px',
		'&:focus': {
			borderColor: '#fff',
		}
	},
}))(InputBase);

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
	listItem: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	input: {
		border: '1px solid #ced4da',
		padding: 10,
		width: 400,
	},
	inputSelect: {
		borderRadius: 0,
		position: 'relative',
		backgroundColor: "#fff",
		border: '1px solid #ced4da',
		fontSize: 16,
		padding: '10px 26px 10px 12px',
		'&:focus': {
			borderColor: '#fff',
		}
	},
	formControl: {
		marginBottom: '12px'
	},
	button: {
		width: '100%',
		backgroundColor: '#6ba586',
		color: 'white',
		'&:hover': {
			color: 'black'
		}
	},
	signIn: {
		display: 'flex'
	}
}));

function RegisterPage() {
	const dispatch = useDispatch();
	const classes = useStyles();

	function handleSubmit(ev) {
		ev.preventDefault();
		dispatch(submitRegister({ name: state.name,
						 email: state.email,
						 affiliation: state.affiliation,
						 position: state.position,
						 groupType: state.groupType,
						 password: state.password
						}));
	}

	const [state, setState] = React.useState({
		name: '',
		email: '',
		affiliation: '0',
		position: '0',
		groupType: '0',
		password: ''
	});

	const handleChange = (event) => {
		const name = event.target.name;
		setState({
			...state,
			[name]: event.target.value,
		});
	};

	return (
		<div className={clsx(classes.root, 'flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32')}>
			<div className="flex flex-col items-center justify-center w-full">
				<FuseAnimate animation="transition.expandIn">
					<Card className={clsx(classes.containerLogin, 'w-full max-w-640')}>
						<CardContent className="flex flex-col items-center justify-center p-32">
							<img className={classes.logo} src="assets/images/logos/scai_logo.svg" alt="SCAI logo" />
							<form
								name="registerForm"
								className="flex flex-col justify-center w-full"
								onSubmit={handleSubmit}
							>
								<List>
									<ListItem className={classes.listItem}>
										<ListItemText primary="Name" />
										<Input
											required
											disableUnderline={true}
											placeholder="Enter Name"
											inputProps={{ className: classes.input }}
											name="name"
											onChange={handleChange}
										/>
									</ListItem>
									<ListItem className={classes.listItem}>
										<ListItemText primary="Email ID" />
										<Input
											required
											disableUnderline={true}
											placeholder="Enter Email"
											inputProps={{ className: classes.input }}
											name="email"
											type="email"
											onChange={handleChange}
										/>
									</ListItem>
									<ListItem className={classes.listItem}>
										<ListItemText primary="Affiliation" />
										<Select
											style={{ width: 422 }}
											labelId="demo-customized-select-label"
											id="demo-customized-select"
											name="affiliation"
											input={<BootstrapInput />}
											onChange={handleChange}
											value={state.affiliation}
										>

											<MenuItem value="0">
												<em>None</em>
											</MenuItem>
											<MenuItem value='1'>Head Office</MenuItem>
											<MenuItem value='2'>Branch Office</MenuItem>
											<MenuItem value='3'>Site Office</MenuItem>
										</Select>
									</ListItem>
									<ListItem className={classes.listItem}>
										<ListItemText primary="Position" />
										<Select
											style={{ width: 422 }}
											labelId="demo-customized-select-label"
											id="demo-customized-select"
											name="position"
											input={<BootstrapInput />}
											onChange={handleChange}
											value={state.position}
										>
											<MenuItem value="0">
												<em>None</em>
											</MenuItem>
											<MenuItem value='1'>統括所長</MenuItem>
											<MenuItem value='2'>Project Manager</MenuItem>
											<MenuItem value='3'>副所長1</MenuItem>
											<MenuItem value='4'>課長1（現場)</MenuItem>
											<MenuItem value='5'>副所長2</MenuItem>
											<MenuItem value='6'>課長2（現場)</MenuItem>
											<MenuItem value='7'>主任1（現場）</MenuItem>
											<MenuItem value='8'>主任2（現場）</MenuItem>
											<MenuItem value='9'>係（現場）</MenuItem>
											<MenuItem value='10'>支店（Branch）</MenuItem>
											<MenuItem value='11'>Other</MenuItem>
										</Select>
									</ListItem>
									<ListItem className={classes.listItem}>
										<ListItemText primary="Group Type" />
										<Select
											style={{ width: 422 }}
											labelId="demo-customized-select-label"
											id="demo-customized-select"
											name="groupType"
											input={<BootstrapInput />}
											onChange={handleChange}
											value={state.groupType}
										>
											<MenuItem value="0">
												<em>None</em>
											</MenuItem>
											<MenuItem value='1'>AH Staff</MenuItem>
										</Select>
									</ListItem>
									<ListItem className={classes.listItem}>
										<ListItemText primary="New Password" />
										<Input
											disableUnderline={true}
											type="password"
											required
											placeholder="Enter Password"
											inputProps={{ className: classes.input }}
											name="password"
											onChange={handleChange}
										/>
									</ListItem>
									<ListItem className={classes.listItem}>
										<ListItemText primary="Confirm New Password" />
										<Input
											disableUnderline={true}
											type="password"
											placeholder="Confirm New Password"
											inputProps={{ className: classes.input }}
											validators={['isPasswordMatch', 'required']}
											errorMessages={['password mismatch', 'this field is required']}
										/>
									</ListItem>
									<ListItem>
										<Button className={classes.button} type="submit">
											Submit
										</Button>
									</ListItem>
								</List>
							</form>
							<div>
								<Typography className={classes.signIn}>Already have an account ? <Link className="font-medium ml-10" to="/login">
									Sign in
								</Link></Typography>
							</div>
						</CardContent>
					</Card>
				</FuseAnimate>
			</div>
		</div>
	);
}

export default RegisterPage;

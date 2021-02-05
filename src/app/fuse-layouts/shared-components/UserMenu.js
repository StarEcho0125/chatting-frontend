import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
//import * as authActions from 'app/auth/store/actions';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Divider, Badge } from '@material-ui/core'

const StyledBadge = withStyles((theme) => ({
	colorPrimary: {
		backgroundColor: 'green'
	},
	colorSecondary: {
		backgroundColor: 'orange'
	},
	colorError: {
		backgroundColor: 'red'
	}
}))(Badge);


const useStyles = makeStyles((theme) => ({
	status: {
		background: 'green',
		borderRadius: '50px',
		position: 'absolute',
		left: '37px',
		bottom: '12px',
		width: '13px',
		height: '13px',
	},
	typo: {
		textAlign: 'center',
		color: 'white',
		backgroundColor: 'black',
		opacity: 0.6
	},
	menuItemStatus: {
		padding: '0 20px 0 25px',
		backgroundColor: 'black',
		opacity: 0.6,
		'&:hover': {
			backgroundColor: 'grey'
		}
	},
	text: {
		display: 'flex',
		justifyContent: 'flex-end',
		color: 'white'
	},
	online: {
		backgroundColor: 'green'
	},
	busy: {
		color: 'red'
	},
	absent: {
		color: 'orange'
	}
}));

function UserMenu(props) {
	const classes = useStyles();
	//const dispatch = useDispatch();
	const user = useSelector(({ auth }) => auth.user);

	const [userMenu, setUserMenu] = useState(null);

	const [userStatus, setStatus] = useState("busy");

	const userMenuClick = event => {
		setUserMenu(event.currentTarget);
	};

	const userMenuClose = () => {
		setUserMenu(null);
	};

	const userStatusOnline = () => {
		setStatus("online");
	}
	const userStatusBusy = () => {
		setStatus("busy");
	}
	const userStatusAbsent = () => {
		setStatus("absent");
	}
	

	return (
		<>
			<Button className="h-64" onClick={userMenuClick}>
				{user.data.photoURL ? (
					<>
						<StyledBadge
							variant="dot"
							color={userStatus === "online" ? "primary" : userStatus === "busy" ? "error" : userStatus === "absent" ? "secondary": null }
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'right',
							}} >
							<Avatar className="" alt="user photo" src={user.data.photoURL} />
							{/* <div className={classes.status}></div> */}
						</StyledBadge>
					</>
				) : (
						<Avatar className="">{user.data.name}</Avatar>
					)}

				<div className="hidden md:flex flex-col mx-12 items-start">
					<Typography component="span" className="normal-case font-600 flex user-name">
						{user.data.name}
					</Typography>
					<Typography className="text-11 capitalize" color="textSecondary">
						{user.role.toString()}
					</Typography>
				</div>

				<Icon className="text-16 hidden sm:flex" variant="action">
					keyboard_arrow_down
				</Icon>
			</Button>

			<Popover
				open={Boolean(userMenu)}
				anchorEl={userMenu}
				onClose={userMenuClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
				classes={{
					paper: 'py-8'
				}}
			>


				<MenuItem component={Link} to="/update_profile" role="button">
					<ListItemIcon className="min-w-40">
						<Icon>update</Icon>
					</ListItemIcon>
					<ListItemText primary="Update Profile" />
				</MenuItem>
				<Divider />
				<Typography className={classes.typo}>
					Set your status
				</Typography>
				<MenuItem className={classes.menuItemStatus} onClick={userStatusOnline}>
					<StyledBadge variant="dot" color="primary"/>
					<ListItemText primary="Online" className={classes.text} />
				</MenuItem>
				<MenuItem className={classes.menuItemStatus} onClick={userStatusBusy}>
					<StyledBadge variant="dot" color="error" />
					<ListItemText primary="Busy" className={classes.text} />
				</MenuItem>
				<MenuItem className={classes.menuItemStatus} onClick={userStatusAbsent}>
					<StyledBadge variant="dot" color="secondary" />
					<ListItemText primary="Absent" className={classes.text} />
				</MenuItem>

			</Popover>
		</>
	);
}

export default UserMenu;

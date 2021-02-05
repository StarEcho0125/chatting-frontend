import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

function Menu(props) {
	const dispatch = useDispatch();

	const theme = useTheme();
    const [menu, setMenu] = useState(null);
    
	const userMenuClick = event => {
		setMenu(event.currentTarget);
	};

	const userMenuClose = () => {
		setMenu(null);
    };

	return (
		<>
            <Tooltip onClick={userMenuClick} title="Menu" placement="bottom">
                <IconButton className={clsx('w-40 h-40', props.className)}>
                    <Icon>more_vert</Icon>
                </IconButton>
            </Tooltip>

			<Popover
				open={Boolean(menu)}
				anchorEl={menu}
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
				
                <MenuItem component={Link} to='/dashboard'>
                    <Icon className="min-w-40">
                        home
                    </Icon>
                    <ListItemText primary={"Home"} />
                </MenuItem>

                <MenuItem component={Link} to='/update_profile'>
                    <Icon className="min-w-40">
                        edit
                    </Icon>
                    <ListItemText primary={"Notice Board"} />
                </MenuItem>

                <MenuItem component={Link} to='/update_profile'>
                    <Icon className="min-w-40">
                        edit
                    </Icon>
                    <ListItemText primary={"Site Schedule"} />
                </MenuItem>

                <MenuItem component={Link} to='/update_profile'>
                    <Icon className="min-w-40">
                        edit
                    </Icon>
                    <ListItemText primary={"Staff Schedule"} />
                </MenuItem>
               
                <MenuItem component={Link} to='/update_profile'>
                    <Icon className="min-w-40">
                        edit
                    </Icon>
                    <ListItemText primary={"Update Profile"} />
                </MenuItem>

                <MenuItem component={Link} to='/logout'>
                    <Icon className="min-w-40">
                        exit_to_app
                    </Icon>
                    <ListItemText primary={"Logout"} />
                </MenuItem>
				

			</Popover>
		</>
	);
}

export default Menu;

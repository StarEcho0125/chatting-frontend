import { Icon } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { useDispatch } from 'react-redux';
import * as Actions from './store/actions';

const useStyles = makeStyles(theme => ({
	containerIcons: {
		position: 'absolute',
		right: '12px',
    },
    icon: {
        marginLeft: '12px',
    }
}));

function IconsChat(props) {
    const classes = useStyles(props);
    const dispatch = useDispatch();
    const handleVideoChat = () => {
        dispatch(Actions.setVideoChat(true));
    }
	return(
        <div className={classes.containerIcons}>
            <Tooltip
                title={'Add person'}
                placement={props.variant === 'horizontal' ? 'bottom' : 'bottom'}
			>
                <Icon className="text-24" color="white" className={classes.icon}>
                    person_add
                </Icon>
            </Tooltip>
            <Tooltip
                title={'Information'}
                placement={props.variant === 'horizontal' ? 'bottom' : 'bottom'}
			>
                <Icon className="text-24" color="white" className={classes.icon}>
                    info
                </Icon>
            </Tooltip>
            <Tooltip
                title={'Call'}
                placement={props.variant === 'horizontal' ? 'bottom' : 'bottom'}
			>
                <Icon className="text-24" color="white" className={classes.icon}>
                    call
                </Icon>
            </Tooltip>
            <Tooltip
                title={'Video Call'}
			>
                    <Icon className="text-24" color="white" className={classes.icon} onClick={handleVideoChat}>
                        videocam
                    </Icon>
            </Tooltip>
        </div>
    )
}

export default IconsChat;

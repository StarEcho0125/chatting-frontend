import { authRoles } from 'app/auth';
import { logoutUser } from 'app/auth/store/actions';
import { useDispatch } from 'react-redux';
import React from 'react'

function Logout() {
	const dispatch = useDispatch();
	dispatch(logoutUser());
	return (<></>)
}

const LogoutConfig = {
	//auth: authRoles.user,
	routes: [
		{
			path: '/logout',
			component: Logout
		}
	]
};

export default LogoutConfig;

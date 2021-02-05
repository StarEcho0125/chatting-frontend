//import { authRoles } from 'app/auth';
import Signup from './Signup';

const SignupConfig = {
	settings: {
		layout: {
			config: {
				navbar: {
					display: false
				},
				toolbar: {
					display: false
				},
				footer: {
					display: false
				},
				leftSidePanel: {
					display: false
				},
				rightSidePanel: {
					display: false
				}
			}
		}
	},
	//auth: authRoles.onlyGuest,
	routes: [
		{
			path: '/signup',
			component: Signup
		}
	]
};

export default SignupConfig;

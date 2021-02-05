import React from 'react';

const AnalyticsDashboardAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/dashboard',
			component: React.lazy(() => import('./Dashboard'))
		}
	]
};

export default AnalyticsDashboardAppConfig;

import React from 'react';

const ProjectDashboardAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/dashboards/admin/project',
			component: React.lazy(() => import('./ProjectDashboardApp'))
		}
	]
};

export default ProjectDashboardAppConfig;

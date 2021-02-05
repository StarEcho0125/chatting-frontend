import AcademyAppConfig from './academy/AcademyAppConfig';
import CalendarAppConfig from './calendar/CalendarAppConfig';
import ChatAppConfig from './chat/ChatAppConfig';
import ContactsAppConfig from './contacts/ContactsAppConfig';

import ECommerceAppConfig from './e-commerce/ECommerceAppConfig';
import FileManagerAppConfig from './file-manager/FileManagerAppConfig';
import MailAppConfig from './mail/MailAppConfig';
import NotesAppConfig from './notes/NotesAppConfig';
import ScrumboardAppConfig from './scrumboard/ScrumboardAppConfig';
import TodoAppConfig from './todo/TodoAppConfig';

import DashboardAdmin from './dashboards/admin/analytics/AnalyticsDashboardAppConfig';
import DashboardAdminConfig from './dashboards/admin/project/ProjectDashboardAppConfig';

import DashboardUser from './dashboards/user/analytics/AnalyticsDashboardAppConfig';
import DashboardUserConfig from './dashboards/user/project/ProjectDashboardAppConfig';


const appsConfigs = [
	MailAppConfig,
	TodoAppConfig,
	FileManagerAppConfig,
	ContactsAppConfig,
	CalendarAppConfig,
	ChatAppConfig,
	ECommerceAppConfig,
	ScrumboardAppConfig,
	AcademyAppConfig,
	NotesAppConfig,
	DashboardAdmin,
	DashboardAdminConfig,
	DashboardUser,
	DashboardUserConfig,
];

export default appsConfigs;

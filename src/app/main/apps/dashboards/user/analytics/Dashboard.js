import FuseAnimate from '@fuse/core/FuseAnimate';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './store/actions';
import reducer from './store/reducers';
import Widget2 from './widgets/Widget2';
import Widget3 from './widgets/Widget3';
import Widget4 from './widgets/Widget4';
import Widget5 from './widgets/Widget5';
import Widget6 from './widgets/Widget6';
import Widget7 from './widgets/Widget7';
import WeatherApp from './widgets/WeatherApp';
import NoticeBoard from './widgets/NoticeBoard';
import StaffSchedule from './widgets/StaffSchedule';
import Widget8 from './widgets/Widget8';
import Widget9 from './widgets/Widget9';

import Calendar from '../../../../apps/calendar/CalendarApp'

function Dashboard() {
	const dispatch = useDispatch();
	const widgets = useSelector(({ dashboard }) => dashboard.widgets.data);

	useEffect(() => {
		dispatch(Actions.getWidgets());
	}, [dispatch]);

	if (!widgets) {
		return null;
	}
	return (
		<div className="w-full">

			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<div className="flex flex-col md:flex-row sm:p-8 container">
					<div className="flex flex-1 flex-col min-w-0">
						<NoticeBoard data={widgets.widget7} />
					</div>

					<div className="flex flex-wrap w-full md:w-1/3 pt-16">
						<div className="mb-32 w-full sm:w-1/2 md:w-full">
							<div className="widget w-full p-16">
								<WeatherApp data={widgets.widget7} />
							</div>
						</div>
					</div>
				</div>
			</FuseAnimate>


			

			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<div className="flex flex-col md:flex-row sm:p-8 container">
					<div className="flex flex-1 flex-col min-w-0">
						<Calendar />
					</div>

					<div className="flex flex-wrap w-full md:w-1/3 pt-16">
						<div className="mb-32 w-full sm:w-1/2 md:w-full">
							<div className="widget w-full p-16">
								<StaffSchedule data={widgets.widget7} />
							</div>
						</div>

					</div>
				</div>
			</FuseAnimate>
	</div>
	);
}

export default withReducer('dashboard', reducer)(Dashboard);

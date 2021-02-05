import ChatPanel from 'app/fuse-layouts/shared-components/chatPanel/ChatPanel';
import QuickPanel from 'app/fuse-layouts/shared-components/quickPanel/QuickPanel';
import React from 'react';
import { useLocation } from 'react-router-dom'


function RightSideLayout1(props) {
	const location = useLocation();
	return (
		<>
		{location.pathname != "/apps/chat" &&
			<ChatPanel />
		}
			<QuickPanel />
		</>
	);
}

export default React.memo(RightSideLayout1);

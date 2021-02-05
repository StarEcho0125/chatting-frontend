import * as Actions from '../actions';

const initialState = {is_video_chat: false, dialog: []};

const chat = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_CHAT: {
			return {
				...state,
				...action.chat
			};
		}
		case Actions.REMOVE_CHAT: {
			return initialState;
		}
		case Actions.SEND_MESSAGE: {
			return {
				...state,
				dialog: [...state.dialog, action.message]
			};
		}
		case Actions.SET_VIDEO_CHAT: {
			return {
				...state,
				is_video_chat : action.payload,
			}
		}
		default: {
			return state;
		}
	}
};

export default chat;

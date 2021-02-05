import * as Actions from '../actions';

// Reducers
const videoReducer = (state = { isStreamSubscribed: false }, action) => {
  switch (action.type) {
    case Actions.HANDLE_SUBSCRIBTION:
      return { ...state, isStreamSubscribed: action.payload };
    default:
      return state;
  }
};
// Root Reducers
// const rootReducer = combineReducers({
//   videoChat: videoReducer,
// });

// Store
// export const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export default videoReducer;

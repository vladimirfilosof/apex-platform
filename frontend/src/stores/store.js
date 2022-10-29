import {combineReducers, configureStore, createStore} from '@reduxjs/toolkit'
import userReducer from "./userSlice";
import {loadState, saveState} from "./localStorage";

export const store = () => {
	const reducers = combineReducers({
		user: userReducer
	});
	const persistedState = loadState();
	const store = createStore(reducers, persistedState);
	//user contains the TOKEN
	store.subscribe(() => {
		saveState({
			user: store.getState().user
		});
	});
	return store;
};
//
// export default configureStore({
// 	reducer: {
// 		user: userReducer,
// 	},
//
// })

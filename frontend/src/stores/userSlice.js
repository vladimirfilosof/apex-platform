import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
	name: 'counter',
	initialState: {
		token: null,
	},
	reducers: {
		setToken: (state, token) => {
			state.token = token.payload
		},
		clear: (state) => {
			state.token = null
		}
	},
})

// Action creators are generated for each case reducer function
export const {setToken, clear} = userSlice.actions

export default userSlice.reducer

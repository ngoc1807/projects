import roleApi from "api/roleApi";
// import { stringify } from "query-string";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const roleData = createAsyncThunk("Roles/RolesData", async () => {
	const role = await roleApi.getAll();
	return role.data;
});

const Role = createSlice({
	name: "role",
	initialState: {
		role: [],
		loading: true,
		error: "",
	},
	reducers: {
		addRole: (state, action) => {
			roleApi.postRole(action.payload);
		},
		removeRole: (state, action) => {
			roleApi.deleteRole(action.payload);
		},
		updateRole: (state, action) => {
			roleApi.updateRole(action.payload);
		},
	},
	extraReducers: {
		[roleData.pending]: (state) => {
			state.loading = true;
		},
		[roleData.rejected]: (state, action) => {
			state.loading = true;
			state.error = action.error;
		},
		[roleData.fulfilled]: (state, action) => {
			state.loading = false;
			state.role = action.payload;
		},
	},
});

const { reducer, actions } = Role;
export const { addRole, removeRole, updateRole } = actions;

export default reducer;

import { message } from "antd";
import blogApi from "api/blogApi";
import {
	BlogFail,
	BlogPending,
	BlogSuccess,
	addBlog,
	removeBlog,
	updateBlog,
	updateBlogStatus,
	BlogUserSuccess,
} from "app/slice/blogSlide";

export const fetchBlogData = () => async (dispatch) => {
	dispatch(BlogPending());

	try {
		const result = await blogApi.getAll();
		if (result.status === "error") {
			return dispatch(BlogFail(result.message));
		}
		await dispatch(BlogSuccess(result.data.reverse()));
	} catch (error) {
		console.log(error);
		dispatch(BlogFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};
export const addBlogAction = (params) => async (dispatch) => {
	try {
		dispatch(BlogPending());
		const result = await blogApi.addBlog(params);
		// console.log(result, "addBlog");
		if (result.status === "success") {
			await dispatch(addBlog(result.data));

			message.success("Thêm bài viết thành công");
		}
	} catch (error) {
		console.log(error);
		dispatch(BlogFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const removeBlogAction = (id) => async (dispatch) => {
	try {
		dispatch(BlogPending());
		const res = await blogApi.deleteBlog(id);

		if (res.status === "success") {
			await dispatch(removeBlog(id));
			message.success("Xóa  bài viết thành công");
		}
	} catch (error) {
		console.log(error);
		dispatch(BlogFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const updateBlogStatusAction = (params) => async (dispatch) => {
	try {
		dispatch(BlogPending());
		const res = await blogApi.updateBlogStatus(params);

		if (res.status === "success") {
			await dispatch(updateBlogStatus(params));
			message.success("Cập nhật trạng thái  thành công");
		}
	} catch (error) {
		console.log(error);
		dispatch(BlogFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const updateBlogAction = (params) => async (dispatch) => {
	try {
		dispatch(BlogPending());
		const res = await blogApi.updateBlog(params);

		console.log(res, "resAction");

		if (res.status === "success") {
			await dispatch(updateBlog(params));
			message.success("Cập nhật blog thành công");
		}
	} catch (error) {
		console.log(error);
		dispatch(BlogFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const fetchBlogUserData = () => async (dispatch) => {
	dispatch(BlogPending());

	try {
		const result = await blogApi.getAll();
		if (result.status === "error") {
			return dispatch(BlogFail(result.message));
		}
		await dispatch(BlogUserSuccess(result.data.reverse()));
	} catch (error) {
		console.log(error);
		dispatch(BlogFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};
export const fetchBlogUserDataProfile = (params) => async (dispatch) => {
	dispatch(BlogPending());

	try {
		const result = await blogApi.fetchUserBlog(params);
		if (result.status === "error") {
			return dispatch(BlogFail(result.message));
		}
		await dispatch(BlogSuccess(result.data.reverse()));
	} catch (error) {
		console.log(error);
		dispatch(BlogFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

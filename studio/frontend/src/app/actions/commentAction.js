import { message } from "antd";
import Comment from "api/commentApi";

import {
	CommentFail,
	CommentPending,
	CommentSuccess,
	CommentSuccessUser,
	addComment,
	removeComment,
	showMoreComment,
	CommentSuccessAll,
} from "app/slice/commentSlide";

export const fetchCommentData = () => async (dispatch) => {
	dispatch(CommentPending());

	try {
		const result = await Comment.getAll();
		if (result.status === "error") {
			return dispatch(CommentFail(result.message));
		}
		await dispatch(CommentSuccessAll(result.data.reverse()));
	} catch (error) {
		console.log(error);
		dispatch(CommentFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const fetchCommentClientData = (params) => async (dispatch) => {
	dispatch(CommentPending());

	try {
		const result = await Comment.getAllClient(params);
		if (result.status === "error") {
			return dispatch(CommentFail(result.message));
		}
		await dispatch(CommentSuccess(result.data.reverse()));
	} catch (error) {
		console.log(error);
		dispatch(CommentFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const addCommentClientAction = (params) => async (dispatch) => {
	try {
		dispatch(CommentPending());
		const result = await Comment.addComment(params);

		if (result.status === "success") {
			await dispatch(addComment(result.data));

			message.success("Gửi nhận xét  thành công");
		}
	} catch (error) {
		console.log(error);
		dispatch(CommentFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const showMoreCommentClientAction = () => async (dispatch) => {
	try {
		dispatch(CommentPending());
		await dispatch(showMoreComment());
	} catch (error) {
		console.log(error);
		dispatch(CommentFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const removeCommentActions = (id) => async (dispatch) => {
	dispatch(CommentPending());

	try {
		const result = await Comment.deleteComment(id);
		if (result.status === "error") {
			return dispatch(CommentFail(result.message));
		}
		await dispatch(removeComment(id));
	} catch (error) {
		console.log(error);
		dispatch(CommentFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

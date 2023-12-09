import { message } from "antd";
import OrderApi from "api/orderApi";

import {
	OrderFail,
	OrderPending,
	OrderSuccess,
	OrderSuccessUser,
	addOrder,
	removeOrder,
	updateOrder,
	updateOrderPay,
	updateOrderStatus,
} from "app/slice/orderSlice";

export const fetchOrderData = () => async (dispatch) => {
	dispatch(OrderPending());

	try {
		const result = await OrderApi.getAll();
		if (result.status === "error") {
			return dispatch(OrderFail(result.message));
		}
		await dispatch(OrderSuccess(result.data.reverse()));
	} catch (error) {
		console.log(error);
		dispatch(OrderFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};
export const fetchOrderDataUser = (params) => async (dispatch) => {
	dispatch(OrderPending());

	try {
		const result = await OrderApi.getAllUser(params);
		if (result.status === "error") {
			return dispatch(OrderFail(result.message));
		}
		await dispatch(OrderSuccessUser(result.data.reverse()));
	} catch (error) {
		console.log(error);
		dispatch(OrderFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const addOrderAction = (params) => async (dispatch) => {
	try {
		dispatch(OrderPending());
		const result = await OrderApi.addOrder(params);
		// console.log(result, "addBlog");
		if (result.status === "success") {
			await dispatch(addOrder(result.data));

			message.success("Thêm bài viết thành công");
		}
	} catch (error) {
		console.log(error);
		dispatch(OrderFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const removeOrderAction = (id) => async (dispatch) => {
	try {
		dispatch(OrderPending());
		const res = await OrderApi.deleteOrder(id);

		if (res.status === "success") {
			await dispatch(removeOrder(id));
			message.success("Xóa thành công");
		}
	} catch (error) {
		console.log(error);
		dispatch(OrderFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const updateOrderStatusAction = (params) => async (dispatch) => {
	try {
		dispatch(OrderPending());
		const res = await OrderApi.updateOrderStatus(params);

		if (res.status === "success") {
			await dispatch(updateOrderStatus(params));
			message.success("Cập nhật trạng thái  thành công");
		}
	} catch (error) {
		console.log(error);
		dispatch(OrderFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const updateOrderPayAction = (params) => async (dispatch) => {
	try {
		dispatch(OrderPending());
		const res = await OrderApi.updateOrderStatus(params);

		if (res.status === "success") {
			await dispatch(updateOrderPay(params));
			message.success("Cập nhật   thành công");
		}
	} catch (error) {
		console.log(error);
		dispatch(OrderFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const updateOrderAction = (params) => async (dispatch) => {
	try {
		dispatch(OrderPending());
		const res = await OrderApi.updateOrder(params);

		// console.log(res, "resAction");

		if (res.status === "success") {
			await dispatch(updateOrder(params));
			message.success("Cập nhật thành công");
		}
	} catch (error) {
		console.log(error);
		dispatch(OrderFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

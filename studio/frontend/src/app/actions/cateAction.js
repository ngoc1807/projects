import { message } from "antd";
import categoryApi from "api/categoryApi";

import {
	getCateFail,
	getCatePending,
	getCateSuccess,
} from "app/slice/categorySlide_v2";

export const fetchCategoryData = () => (dispatch) => {
	return new Promise(async (resolve, reject) => {
		try {
			dispatch(getCatePending());

			//call api
			const result = await categoryApi.getAll();
			// console.log(result, "result");
			if (result.status === "error") {
				return dispatch(getCateFail(result.message));
			}
			dispatch(getCateSuccess(result.data));
			resolve(result.data);
		} catch (error) {
			console.log(error);
			dispatch(getCateFail(error.message));
			message.error(`Error : ${error.message}`);
			reject(error);
		}
	});
};

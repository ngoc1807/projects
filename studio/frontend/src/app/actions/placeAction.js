import { message } from "antd";
import placeApi from "api/placeApi";

import {
	getPlaceFail,
	getPlacePending,
	getPlaceSuccess,
} from "app/slice/placeSlide_v2";

export const fetchPlaceData = () => (dispatch) => {
	return new Promise(async (resolve, reject) => {
		try {
			dispatch(getPlacePending());

			//call api
			const result = await placeApi.getAll();
			// console.log(result, "result");
			if (result.status === "error") {
				return dispatch(getPlaceFail(result.message));
			}
			dispatch(getPlaceSuccess(result.data));
			resolve(result.data);
		} catch (error) {
			console.log(error);
			dispatch(getPlaceFail(error.message));
			message.error(`Error : ${error.message}`);
			reject(error);
		}
	});
};

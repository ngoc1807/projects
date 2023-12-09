import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import userReducer from "./slice/userSlice";
import roleReducer from "features/Admin/Role/roleSlide";
import albumReducer from "app/slice/albumSlide";
import placeReducer from "features/Admin/Place/placeSlide";
import categoryReducer from "features/Admin/Category/categorySlide";
import blogReducer from "app/slice/blogSlide";
import loginReducer from "./slice/loginSlice";
import listUserReducer from "app/slice/listUserSlice";
import category_v2Reducer from "app/slice/categorySlide_v2";
import place_v2Reducer from "app/slice/placeSlide_v2";
import tourReducer from "app/slice/tourSlide";
import orderReducer from "app/slice/orderSlice";
import UserAlbumReducer from "app/slice/UserAlbumSlice";
import commentReducer from "app/slice/commentSlide";
const rootReducer = combineReducers({
	listUser: listUserReducer,
	user: userReducer,
	role: roleReducer,
	album: albumReducer,
	place: placeReducer,
	category: categoryReducer,
	blog: blogReducer,
	login: loginReducer,
	category_v2: category_v2Reducer,
	place_v2: place_v2Reducer,
	tour: tourReducer,
	order: orderReducer,
	UserAlbum: UserAlbumReducer,
	comment: commentReducer,
});
const persistConfig = {
	key: "root",
	storage,
	whitelist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
});

export default store;

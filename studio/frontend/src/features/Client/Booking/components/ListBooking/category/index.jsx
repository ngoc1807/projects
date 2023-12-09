import React, { useEffect, useState } from "react";
import "./category.scss";
import { Checkbox, Input, Form, Col, Row, Button } from "antd";

import { placeData } from "features/Admin/Place/placeSlide";
import { categoryData } from "features/Admin/Category/categorySlide";
import { useDispatch, useSelector } from "react-redux";

import SearchCustom from "components/Search";
import {
	fetchTourData,
	sortTourAction,
	filterTitleTourAction,
	filterPriceTourAction,
} from "app/actions/tourAction";
import { layout, RULES_ANTD } from "./../../../../../../constants";
import { DollarCircleOutlined } from "@ant-design/icons";

const { Search } = Input;
function CategoryListBooking(props) {
	const dispatch = useDispatch();
	const listPlace = useSelector((state) => state.place.place);
	const listCate = useSelector((state) => state.category.category);
	const [form] = Form.useForm();
	const statePlace = async () => {
		await dispatch(placeData());
	};

	const stateCategory = async () => {
		await dispatch(categoryData());
	};
	const [state, setSate] = useState({
		place: [],
		cate: [],
	});

	useEffect(() => {
		statePlace();
		stateCategory();
	}, []);

	useEffect(() => {
		handleCheckbox();
	}, [state]);
	const handleCheckbox = async () => {
		await dispatch(sortTourAction(state));
	};

	const handleSearch = async (value) => {
		await dispatch(filterTitleTourAction(value));
		// filterTitleTourAction(value);
	};

	const optionsCate = () => {
		const a = listCate.map((i, k) => {
			return { label: i.name, value: i.id, key: k };
		});

		return a;
	};
	const optionsPlace = () => {
		const a = listPlace.map((i, k) => {
			return { label: i.name, value: i.id, key: k };
		});

		return a;
	};

	const onChangeCheckboxPlace = (checkedValues) => {
		setSate({ ...state, place: checkedValues });
	};
	const onChangeCheckboxCate = (checkedValues) => {
		setSate({ ...state, cate: checkedValues });
	};

	const optCate = optionsCate();
	const optPlace = optionsPlace();

	const onFinishFailed = (errorInfo) => {
		console.log("Bạn chưa nhập đầy đủ thông tin");
	};
	const onFinish = async (value) => {
		// 		console.log(value);
		// const {minNumber,maxNumber} = value;
		await dispatch(filterPriceTourAction(value));
	};
	const handleReset = async () => {
		form.resetFields();
		await dispatch(fetchTourData());
	};
	return (
		<div className="category col-md-12 col-lg-3">
			<div className="title">
				<p> Tìm kiếm</p>
			</div>
			<div className="SearchCategory">
				<SearchCustom handleSearch={handleSearch} />
			</div>
			<div className="title">
				<p> Địa điểm </p>
			</div>

			<div className="listCateBooking">
				<Checkbox.Group
					className="BoxCate-item"
					options={optPlace}
					onChange={onChangeCheckboxPlace}
				/>
			</div>

			<div className="title">
				<p> Chủ đề </p>
			</div>
			<div className="listCateBooking">
				<Checkbox.Group
					className="BoxCate-item"
					options={optCate}
					onChange={onChangeCheckboxCate}
				/>
			</div>

			<div className="title">
				<p> Giá tiền </p>
			</div>
			<div className="priceRangerFilter ">
				<div className="box w-100">
					<Form
						{...layout}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						className="w-100"
						form={form}
					>
						<Row>
							<Col span={24}>
								<Form.Item
									label="Giá từ (VND)"
									name="minNumber"
									rules={RULES_ANTD.isIntegerForPrice}
									hasFeedback
								>
									<Input
										type="number"
										prefix={<DollarCircleOutlined />}
									/>
								</Form.Item>
							</Col>
							<Col span={24}>
								<Form.Item
									label="Đến (VND)"
									name="maxNumber"
									rules={RULES_ANTD.isIntegerForPrice}
									hasFeedback
								>
									<Input
										type="number"
										prefix={<DollarCircleOutlined />}
									/>
								</Form.Item>
							</Col>

							<Col span={12}>
								<Form.Item>
									<Button onClick={handleReset} className=" btn w-100">
										Xóa tìm kiếm
									</Button>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item>
									<Button htmlType="submit" className="w-100 btn pr-3">
										Tìm kiếm
									</Button>
								</Form.Item>
							</Col>
						</Row>
					</Form>
				</div>
			</div>
		</div>
	);
}

export default CategoryListBooking;

import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Form, message, Input, Button, Row, Col, Image, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import defaultImage from "assets/images/defaultImage.jpg";
import CKEditor from "ckeditor4-react";
import { randomName } from "utils/common";
import { RULES_ANTD, layout, tailLayout } from "./../../../constants";
import { storage } from "firebaseConfig";
import "./tourAdmin.scss";
import { fetchCategoryData } from "app/actions/cateAction";
import { fetchPlaceData } from "app/actions/placeAction";
import { addTourAction, updateTourAction } from "app/actions/tourAction";

function CreateOrEditTour(props) {
	const history = useHistory();
	const dispatch = useDispatch();
	const { id } = useParams();

	const detailTour = useSelector((state) =>
		state.tour.tour.find((x) => x.id === +id)
	);

	const [loading, setLoading] = useState(false);
	// console.log(detailTour, "detailTour", loading);

	const [listCate, setListCate] = useState([]);
	const [listPlace, setListPlace] = useState([]);

	// const []
	const [state, setState] = useState({
		idEdit: "",
		title: "",

		duration: "",
		category: "",
		people: "",
		clothes: "",

		photographer: "",

		image: "",
		oldImage: id && detailTour ? detailTour.image : "",

		price: "",
		sale: "",
		place: [],
		cate: [],

		linkImg: "",
	});
	const [content, setContent] = useState(
		id && detailTour ? detailTour.desc : null
	);

	const { image, linkImg, oldImage } = state;

	useEffect(() => {
		getCate();
		getPlace();
	}, []);

	const getCate = async () => {
		const data = await dispatch(fetchCategoryData());
		setListCate(data);
	};
	const getPlace = async () => {
		const data = await dispatch(fetchPlaceData());
		setListPlace(data);
	};

	const initialValues = {
		title: id && detailTour ? detailTour.title : "",

		duration: id && detailTour ? detailTour.duration : "",
		people: id && detailTour ? detailTour.people : "",
		clothes: id && detailTour ? detailTour.clothes : [],

		cate: id && detailTour ? detailTour.Booking_NN_Cate[0]["id"] : "",
		place:
			id && detailTour
				? detailTour.Booking_NN_Place.map((item, index) => item.id)
				: [],

		photographer: id && detailTour ? detailTour.photographer : "",

		price: id && detailTour ? detailTour.price : "",
		sale: id && detailTour ? detailTour.sale : "",
	};

	//  handleChangeValue
	// const handleOnChange = (e) => {
	// 	setState({
	// 		...state,
	// 		[e.target.id]: e.target.value,
	// 	});
	// };

	const handleOnCate = (value) => {
		// console.log(value, "cate");
		const data = [];
		if (value) {
			data.push({ CateId: value });
		}
		setState({ ...state, cate: data });
	};

	const handleOnCateEdit = (value) => {
		const data = [];
		if (value) {
			data.push({ CateId: value });
			return data;
		}
		return value;
	};

	const handleOnPlace = (value) => {
		const data = [];
		if (value) {
			for (let i = 0; i < value.length; i++) {
				data.push({ PlaceId: value[i] });
			}
		}
		setState({ ...state, place: data });
	};

	const handleOnPlaceEdit = (value) => {
		// console.log(value, "cate");
		const data = [];
		if (value) {
			for (let i = 0; i < value.length; i++) {
				data.push({ PlaceId: value[i] });
			}
			return data;
		}
		return value;
	};

	const handleOnChangeAvatar = async (e) => {
		try {
			const newImg = (await e.target.files) ? e.target.files[0] : null;
			if (newImg) {
				await setState({
					...state,
					linkImg: URL.createObjectURL(e.target.files[0]),
					image: e.target.files[0],
				});
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleOnChangeCkeditor = (evt) => {
		setContent(evt.editor.getData());
	};

	// handleValidate
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
		message.error("Bạn chưa nhập đầy đủ thông tin");
		return;
	};

	// handleSubmit
	const onSubmit = async (value) => {
		// console.log("onSubmit", value);
		// console.log("state", state);
		setLoading(true);

		let newTour = {
			id: id ? id : "",
			title: value.title,

			duration: value.duration,
			people: value.people,
			clothes: value.clothes,
			image: "",
			photographer: value.photographer,

			desc: content,

			price: value.price,
			sale: value.sale,

			Booking_ON_Place: id ? handleOnPlaceEdit(value.place) : state.place,
			Booking_ON_Cate: id ? handleOnCateEdit(value.cate) : state.cate,
		};

		if (id) {
			// console.log(newTour, "aaaa");
			newTour.image = detailTour.image;
			if (linkImg) {
				await storage
					.refFromURL(oldImage)
					.delete()
					.then(() => console.log("delete img success"))
					.catch((err) => {
						console.log(err);
					});
				const uniqueSuffix = randomName(image.name);
				await storage.ref(`imageTour/${uniqueSuffix}`).put(image);

				const anh = await storage
					.ref("imageTour")
					.child(uniqueSuffix)
					.getDownloadURL();

				newTour.image = anh;

				// console.log(newTour, "newTour");
			}
			console.log(newTour, "newTour");

			await dispatch(updateTourAction(newTour));
			setTimeout(() => {
				history.push("/admin/tour");
				setLoading(false);
			}, 500);
		} else {
			//add

			if (image) {
				const uniqueSuffix = randomName(image.name);
				await storage.ref(`imageTour/${uniqueSuffix}`).put(image);
				const anh =
					(await storage
						.ref("imageTour")
						.child(uniqueSuffix)
						.getDownloadURL()) || "";

				newTour.image = anh;
			}
			dispatch(addTourAction(newTour));
			setTimeout(() => {
				history.goBack();

				setLoading(false);
			}, 500);
		}
	};

	return (
		<div className="blogEditAdmin">
			<div className="text-center heading pb-5">
				<h2> {id ? "Chỉnh sửa tour" : "Thêm tour"} </h2>

				<div className="d-flex justify-content-center ">
					<hr
						style={{
							width: "15%",
							backgroundColor: "#ffa801",
							padding: "0.2px 0",
						}}
					/>
				</div>
			</div>

			<Form
				{...layout}
				onFinish={onSubmit}
				onFinishFailed={onFinishFailed}
				// onChange={handleOnChange}
				initialValues={initialValues}
			>
				<Row gutter={[16, 16]}>
					<Col md={24} xl={16} className="gutter-row">
						<Form.Item
							name="title"
							label="Tiêu đề"
							hasFeedback
							rules={RULES_ANTD.common}
						>
							<Input />
						</Form.Item>
						<Form.Item
							name="photographer"
							label="Tên nhiếp ảnh"
							hasFeedback
							rules={RULES_ANTD.common}
						>
							<Input />
						</Form.Item>
						<Form.Item name="place" label="Địa điểm">
							<Select
								mode="multiple"
								placeholder="Chọn địa điểm"
								showArrow
								allowClear
								onChange={handleOnPlace}
							>
								{listPlace &&
									listPlace.map((item, index) => (
										<Select.Option key={index} value={item.id}>
											{item.name}
										</Select.Option>
									))}
							</Select>
						</Form.Item>
						<Form.Item
							name="price"
							label="Giá gói chụp"
							hasFeedback
							rules={RULES_ANTD.isIntegerForPrice}
						>
							<Input />
						</Form.Item>

						<Form.Item
							name="sale"
							label="Phần trăm giảm giá (%)"
							hasFeedback
							rules={RULES_ANTD.sale}
						>
							<Input type="number" />
						</Form.Item>
					</Col>

					<Col md={24} xl={8} className="gutter-row">
						<Form.Item label="Ảnh chính">
							<Input
								accept="image/*"
								id="icon-button-file"
								type="file"
								onChange={handleOnChangeAvatar}
							/>
							{linkImg ? (
								<Image
									src={linkImg}
									className="img-thumbnail imageMain"
								/>
							) : (
								<Image
									src={
										id && detailTour ? detailTour.image : defaultImage
									}
									className="img-thumbnail imageMain"
								/>
							)}
						</Form.Item>
					</Col>
				</Row>

				<Row gutter={[16, 16]}>
					<Col span={6}>
						<Form.Item
							name="duration"
							label="Thời gian chụp"
							hasFeedback
							rules={RULES_ANTD.isNumber}
						>
							<Input type="number" />
						</Form.Item>
					</Col>
					<Col span={6}>
						<Form.Item
							name="people"
							label="Số người đi cùng"
							hasFeedback
							rules={RULES_ANTD.isNumber}
						>
							<Input type="number" />
						</Form.Item>
					</Col>

					<Col span={6}>
						<Form.Item
							name="clothes"
							label="Trang phục"
							hasFeedback
							rules={RULES_ANTD.isNumber}
						>
							<Select
								placeholder="Chọn kiểu chụp"
								showArrow
								allowClear
								// onChange={handleOnClothes}
							>
								<Select.Option key={0} value={true}>
									Có sẵn
								</Select.Option>
								<Select.Option key={1} value={false}>
									Tự chuẩn bị
								</Select.Option>
							</Select>
						</Form.Item>
					</Col>
					<Col span={6}>
						<Form.Item
							name="cate"
							label="Thể loại"
							rules={RULES_ANTD.text}
						>
							<Select
								placeholder="Chọn kiểu chụp"
								showArrow
								allowClear
								onChange={handleOnCate}
							>
								{listCate &&
									listCate.map((item, index) => (
										<Select.Option key={index} value={item.id}>
											{item.name}
										</Select.Option>
									))}
							</Select>
						</Form.Item>
					</Col>
				</Row>

				<Form.Item name="editor" label="Nội dung">
					<CKEditor
						type="document"
						data={content}
						onChange={handleOnChangeCkeditor}
					/>
				</Form.Item>

				<Form.Item {...tailLayout}>
					<Button loading={loading} type={"primary"} htmlType="submit">
						{id ? "Sửa" : "Thêm"}
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
}

export default CreateOrEditTour;

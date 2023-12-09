import React, { useEffect, useState } from "react";
import {
	Form,
	message,
	Input,
	Button,
	Upload,
	Modal,
	Image,
	Select,
	Row,
	Col,
} from "antd";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import { storage } from "firebaseConfig";
import { updateAlbumAction, addAlbumAction } from "app/actions/albumAction";
import defaultImage from "assets/images/defaultImage.jpg";

import "./AlbumAdmin.scss";
import { RULES_ANTD } from "./../../../constants";

function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}

function CreateOrEditAlbum(props) {
	const { id } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();

	const [loading, setLoading] = useState(false);

	const [state, setState] = useState({
		idEdit: "",
		name: "",

		avatar: "",
		linkImg: "",
		nameImg: "",
		img: "",

		desc: "",
		author: "",
		camera_name: "",
		camera_eyes: "",
		camera_len: "",
		camera_stopwatch: "",
		camera_iso: "",
		like: "",

		place: [],
		category: [],

		previewVisible: false,
		previewImage: "",
		previewTitle: "",

		fileList: [],
		oldList: [],
	});

	const detailAlbum = useSelector((state) =>
		state.album.album.find((x) => x.id === +id)
	);

	const listPlace = useSelector((state) => state.place.place);
	const listCate = useSelector((state) => state.category.category);

	const {
		name,
		desc,

		avatar,
		linkImg,
		img,

		author,
		camera_name,
		camera_eyes,
		camera_len,
		camera_stopwatch,
		camera_iso,
		like,

		place,
		category,

		previewVisible,
		previewImage,
		previewTitle,

		fileList,
		oldList,
	} = state;

	const selectPlacetId =
		detailAlbum && detailAlbum.Album_NN_Place.map((item, index) => item.id);

	const selectCateId =
		detailAlbum && detailAlbum.Album_NN_Cate.map((item, index) => item.id);

	useEffect(() => {
		if (id) {
			const listImage = detailAlbum.Album_Imgs.map((item, index) => ({
				uid: index,
				name: `Image ${index}`,
				url: item.image,
			}));

			setState({
				...state,
				idEdit: id,

				name: detailAlbum.name,
				desc: detailAlbum.desc,

				avatar: detailAlbum.avatar,

				author: detailAlbum.author,
				camera_name: detailAlbum.camera_name,
				camera_eyes: detailAlbum.camera_eyes,
				camera_len: detailAlbum.camera_len,
				camera_stopwatch: detailAlbum.camera_stopwatch,
				camera_iso: detailAlbum.camera_iso,
				like: detailAlbum.like,

				place:
					detailAlbum &&
					detailAlbum.Album_NN_Place.map((item, index) => ({
						PlaceId: item.id,
					})),
				category:
					detailAlbum &&
					detailAlbum.Album_NN_Cate.map((item, index) => ({
						CateId: item.id,
					})),

				fileList: listImage,
				oldImage: listImage,
			});
		}
	}, []);

	// Handle

	const onSubmit = async () => {
		setLoading(true);
		// console.log(state, "onsubmit");

		if (id) {
			const newList = [];
			const newListTest = [];

			// handle new fileList
			// loop new file  , if new image -> push firebase -> push newList
			// if old file -> push newList and newListTest
			// newListTest to check  different with oldImage
			// then splice just remain element was delete

			for (let i = 0; i < fileList.length; i++) {
				if (fileList[i] && fileList[i].originFileObj) {
					const uniqueSuffix = handleFileName(
						fileList[i].originFileObj.name
					);
					await storage
						.ref(`imagesPlace/${uniqueSuffix}`)
						.put(fileList[i].originFileObj);

					const nameUrl = await storage
						.ref("imagesPlace")
						.child(uniqueSuffix)
						.getDownloadURL();

					newList.push({ image: nameUrl });
				} else {
					newList.push({ image: fileList[i].url });
					newListTest.push({ image: fileList[i].url });
				}
			}

			for (let i = 0; i < newListTest.length; i++) {
				const index = oldList.indexOf(
					oldList.find((item) => item.url === newListTest[i].image)
				);
				oldList.splice(index, 1);
			}

			// delete oldFile list

			if (oldList.length > 0) {
				for (let i = 0; i < oldList.length; i++) {
					await storage
						.refFromURL(oldList[i].url)
						.delete()
						.then(() => console.log("delete img success"))
						.catch((err) => {
							console.log(err);
						});
				}
			}

			// delete old avatar if have change avatar

			let anh;
			if (linkImg) {
				await storage
					.refFromURL(avatar)
					.delete()
					.then(() => console.log("delete img success"))
					.catch((err) => {
						console.log(err);
					});

				const uniqueSuffix =
					Date.now() + "-" + Math.round(Math.random() * 1e9) + img.name;
				await storage.ref(`imageAlbum/${uniqueSuffix}`).put(img);

				anh = await storage
					.ref("imageAlbum")
					.child(uniqueSuffix)
					.getDownloadURL();
			}

			const newState = {
				idEdit: id,
				name,
				desc,
				avatar: anh ? anh : avatar,
				author,
				camera_name,
				camera_eyes,
				camera_len,
				camera_stopwatch,
				camera_iso,
				like,
				Album_Imgs: newList,
				Album_ON_Cate: category,
				Album_ON_Place: place,
			};
			// console.log(newState);
			await dispatch(updateAlbumAction(newState));
			setLoading(false);

			setTimeout(() => {
				history.push("/admin/album");
			}, 500);
		} else {
			// add
			const listImage = [];

			//	up firebase
			if (img) {
				const uniqueSuffix =
					Date.now() + "-" + Math.round(Math.random() * 1e9) + img.name;
				await storage.ref(`imageAlbum/${uniqueSuffix}`).put(img);
				const anh = await storage
					.ref("imageAlbum")
					.child(uniqueSuffix)
					.getDownloadURL();

				for (let i = 0; i < fileList.length; i++) {
					const uniqueSuffix = handleFileName(
						fileList[i].originFileObj.name
					);
					await storage
						.ref(`imageAlbum/${uniqueSuffix}`)
						.put(fileList[i].originFileObj);

					const nameUrl = await storage
						.ref("imageAlbum")
						.child(uniqueSuffix)
						.getDownloadURL();

					listImage.push({ image: nameUrl });
				}

				//  up db

				const newState = {
					name,
					desc,
					avatar: anh,
					author,
					camera_name,
					camera_eyes,
					camera_len,
					camera_stopwatch,
					camera_iso,
					like,
					Album_Imgs: listImage,
					Album_ON_Cate: category,
					Album_ON_Place: place,
				};
				// console.log(newState);
				await dispatch(addAlbumAction(newState));

				setTimeout(() => {
					history.goBack();

					setLoading(false);
				}, 500);
			} else {
				setLoading(false);
				message.error("Bạn chưa chọn ảnh");

				return;
			}
		}
	};
	const handleCancel = () => setState({ ...state, previewVisible: false });

	const handlePreview = async (file) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}

		setState({
			...state,
			previewImage: file.url || file.preview,
			previewVisible: true,
			previewTitle:
				file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
		});
	};

	const handleOnChange = (e) => {
		setState({
			...state,
			[e.target.id]: e.target.value,
		});
	};

	const handleOnChangeAvatar = async (e) => {
		try {
			const newImg = (await e.target.files) ? e.target.files[0] : null;
			if (newImg) {
				await setState({
					...state,
					linkImg: URL.createObjectURL(e.target.files[0]),

					nameImg: e.target.files[0].name,
					img: e.target.files[0],
				});
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleOnChangeUpload = ({ fileList }) => {
		setState({ ...state, fileList });
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

	const handleOnCate = (value) => {
		const data = [];
		if (value) {
			for (let i = 0; i < value.length; i++) {
				data.push({ CateId: value[i] });
			}
		}
		setState({ ...state, category: data });
	};

	const handleFileName = (value) => {
		return Date.now() + "-" + Math.round(Math.random() * 1e9) + value;
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
		message.error("Bạn chưa nhập đầy đủ thông tin");
		return;
	};
	const initialValues = {
		name: detailAlbum ? detailAlbum.name : "",
		desc: detailAlbum ? detailAlbum.desc : "",
		author: detailAlbum ? detailAlbum.author : "",
		camera_name: detailAlbum ? detailAlbum.camera_name : "",
		camera_eyes: detailAlbum ? detailAlbum.camera_eyes : "",
		camera_len: detailAlbum ? detailAlbum.camera_len : "",
		camera_stopwatch: detailAlbum ? detailAlbum.camera_stopwatch : "",
		camera_iso: detailAlbum ? detailAlbum.camera_iso : "",
		like: detailAlbum ? detailAlbum.like : "",
	};

	const uploadButton = (
		<div>
			<PlusOutlined />
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	);
	const layout = {
		labelCol: {
			span: 24,
		},
		wrapperCol: {
			span: 24,
		},
	};

	return (
		<div>
			<div className="text-center heading pb-5">
				<h2> {id ? "Chỉnh sửa album" : "Thêm album"} </h2>

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
			<div>
				<Form
					{...layout}
					initialValues={initialValues}
					onFinish={onSubmit}
					onFinishFailed={onFinishFailed}
					onChange={handleOnChange}
				>
					<Form.Item
						name="name"
						label="Tên album"
						hasFeedback
						rules={[
							{
								required: true,
								message: "Please input !",
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						name="desc"
						label="Miêu tả"
						hasFeedback
						rules={[
							{
								required: true,
								message: "Please input !",
							},
						]}
					>
						<Input.TextArea />
					</Form.Item>

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
								className=" img-thumbnail"
								height="150px"
								width="250px"
								alt=""
							/>
						) : (
							<Image
								src={detailAlbum ? detailAlbum.avatar : defaultImage}
								className=" img-thumbnail"
								height="150px"
								width="250px"
								alt=""
							/>
						)}
					</Form.Item>
					<Form.Item
						name="author"
						label="Người chụp"
						hasFeedback
						rules={[
							{
								required: true,
								message: "Please input !",
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						name="camera_name"
						label="Tên máy ảnh"
						hasFeedback
						rules={[
							{
								required: true,
								message: "Please input !",
							},
						]}
					>
						<Input />
					</Form.Item>
					<Row justify="space-between">
						<Col span={4}>
							<Form.Item
								name="camera_eyes"
								label="Mắt máy ảnh (mm)"
								hasFeedback
								rules={RULES_ANTD.isNumber}
							>
								<Input type="number" />
							</Form.Item>
						</Col>
						<Col span={4}>
							<Form.Item
								name="camera_len"
								label="Len máy ảnh (f/)"
								hasFeedback
								rules={RULES_ANTD.isNumber}
							>
								<Input type="number" />
							</Form.Item>
						</Col>
						<Col span={4}>
							<Form.Item
								name="camera_stopwatch"
								label="camera_stopwatch (1/)"
								hasFeedback
								rules={RULES_ANTD.isNumber}
							>
								<Input type="number" />
							</Form.Item>
						</Col>
						<Col span={4}>
							<Form.Item
								name="camera_iso"
								label="ISO"
								hasFeedback
								rules={RULES_ANTD.isNumber}
							>
								<Input type="number" />
							</Form.Item>
						</Col>
					</Row>

					<Form.Item
						name="like"
						label="Lượt thích"
						hasFeedback
						rules={[
							{
								required: true,
								message: "Please input !",
							},
						]}
					>
						<Input type="number" />
					</Form.Item>

					<Form.Item name="place" label="Địa điểm">
						<Select
							mode="multiple"
							placeholder="Please select your place"
							showArrow
							allowClear
							onChange={handleOnPlace}
							defaultValue={selectPlacetId}
						>
							{listPlace &&
								listPlace.map((item, index) => (
									<Select.Option key={index} value={item.id}>
										{item.name}
									</Select.Option>
								))}
						</Select>
					</Form.Item>

					<Form.Item name="cate" label="Kiểu chụp">
						<Select
							mode="multiple"
							placeholder="Chọn kiểu chụp"
							showArrow
							allowClear
							onChange={handleOnCate}
							defaultValue={selectCateId}
						>
							{listCate &&
								listCate.map((item, index) => (
									<Select.Option key={index} value={item.id}>
										{item.name}
									</Select.Option>
								))}
						</Select>
					</Form.Item>

					<Form.Item label="Danh sách ảnh">
						<Upload
							listType="picture-card"
							fileList={fileList}
							onPreview={handlePreview}
							onChange={handleOnChangeUpload}
							multiple
						>
							{uploadButton}
						</Upload>

						<Modal
							visible={previewVisible}
							title={previewTitle}
							footer={null}
							onCancel={handleCancel}
							width="800px"
						>
							<img
								alt="example"
								style={{ width: "100%" }}
								src={previewImage}
							/>
						</Modal>
					</Form.Item>

					<Form.Item className="pt-3">
						<Button
							loading={loading}
							className="btn float-right login_btn "
							htmlType="submit"
						>
							{id ? "Sửa" : "Thêm"}
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}

export default CreateOrEditAlbum;

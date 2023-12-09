import React, { useEffect, useState } from "react";
import { Form, message, Input, Button, Upload, Modal } from "antd";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPlace, placeData, updatePlace } from "./placeSlide";
import { PlusOutlined } from "@ant-design/icons";
import { storage } from "firebaseConfig";
import { layout } from "./../../../constants";
CreateOrEditPlace.propTypes = {};

function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}

function CreateOrEditPlace(props) {
	const { id } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();

	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({
		idEdit: "",
		name: "",
		desc: "",
		previewVisible: false,
		previewImage: "",
		previewTitle: "",
		fileList: [],
		oldImage: [],
	});

	const detailPlace = useSelector((state) =>
		state.place.place.find((x) => x.id === +id)
	);

	const statePlace = async () => {
		await dispatch(placeData());
	};

	const {
		name,
		desc,
		previewVisible,
		previewImage,
		previewTitle,
		fileList,
		oldImage,
	} = state;

	useEffect(() => {
		if (id) {
			console.log(detailPlace);
			const listImage = detailPlace.Place_Imgs.map((item, index) => ({
				uid: index,
				name: "Image",
				url: item.image,
			}));

			setState({
				...state,
				idEdit: id,

				name: detailPlace.name,
				desc: detailPlace.desc,
				fileList: listImage,
				oldImage: listImage,
			});
		}
	}, []);

	// handleForm

	const onSubmit = async () => {
		setLoading(true);

		if (id) {
			// console.log(fileList, "fileList");
			const newList = [];
			const newListTest = [];

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
			// list can update
			// console.log(newList, "newlist");

			// list moi con lai
			// console.log(newListTest, "newListTest");

			// list cu
			// console.log(oldImage, "oldList");

			for (let i = 0; i < newListTest.length; i++) {
				const index = oldImage.indexOf(
					oldImage.find((item) => item.url === newListTest[i].image)
				);
				oldImage.splice(index, 1);
			}
			// console.log(oldImage, "result");

			// delete image if have change
			if (oldImage.length > 0) {
				for (let i = 0; i < oldImage.length; i++) {
					await storage
						.refFromURL(oldImage[i].url)
						.delete()
						.then(() => console.log("delete img success"))
						.catch((err) => {
							console.log(err);
						});
				}
			}

			const newPlace = {
				idEdit: id,
				name,
				desc,
				// fileList la do ben back-end quy dinh
				// fileList: newList,
				Place_Imgs: newList,
			};

			// console.log(newPlace);
			await dispatch(updatePlace(newPlace));
		} else {
			if (fileList.length > 0) {
				const listImage = [];
				for (let i = 0; i < fileList.length; i++) {
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

					listImage.push({ image: nameUrl });
				}

				const newPlace = {
					name,
					desc,
					Place_Imgs: listImage,
				};

				// console.log(newPlace);
				await dispatch(addPlace(newPlace));
			} else {
				const newPlace = {
					name,
					desc,
					Place_Imgs: "",
				};
				await dispatch(addPlace(newPlace));
			}
		}

		setLoading(false);

		setTimeout(() => {
			statePlace();
			history.push("/admin/place");
		}, 500);
	};

	//
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

	const handleOnChangeUpload = ({ fileList }) => {
		setState({ ...state, fileList });
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
		name: detailPlace ? detailPlace.name : "",
		desc: detailPlace ? detailPlace.desc : "",
	};

	const uploadButton = (
		<div>
			<PlusOutlined />
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	);

	return (
		<div>
			<div className="text-center heading pb-5">
				<h2> {id ? "Chỉnh sửa địa điểm" : "Thêm địa điểm"} </h2>

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
						label="Tên địa điểm"
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

					<Form.Item label="Hình Ảnh">
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

export default CreateOrEditPlace;

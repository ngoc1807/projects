import React, { useEffect, useState } from "react";

import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, categoryData, updateCategory } from "./categorySlide";
import { Form, message, Input, Button, Upload, Modal } from "antd";

import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
// import PropTypes from "prop-types";
import { storage } from "firebaseConfig";
import { layout } from "./../../../constants";
CreateOrEditCategory.propTypes = {};

function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}

const beforeUpload = (file) => {
	const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
	if (!isJpgOrPng) {
		message.error("You can only upload JPG/PNG file!");
	}
	const isLt2M = file.size / 1024 / 1024 < 2;
	if (!isLt2M) {
		message.error("Image must smaller than 2MB!");
	}
	return isJpgOrPng && isLt2M;
};

function CreateOrEditCategory(props) {
	const { id } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();

	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({
		idEdit: "",
		name: "",
		desc: "",
		oldImage: "",
		previewVisible: false,
		previewImage: "",
		previewTitle: "",
		fileList: [],
	});

	// console.log(state.fileList, "filelist");

	const detailCategory = useSelector((state) =>
		state.category.category.find((x) => x.id === +id)
	);
	const stateCategory = async () => {
		await dispatch(categoryData());
	};

	const {
		name,
		desc,
		oldImage,
		previewVisible,
		previewImage,
		previewTitle,
		fileList,
	} = state;

	useEffect(() => {
		if (id && detailCategory) {
			setState({
				...state,
				idEdit: id,
				name: detailCategory.name,
				desc: detailCategory.desc,
				fileList: [
					{
						uid: 0,
						name: "Image",
						url: detailCategory.images,
					},
				],
				oldImage: detailCategory.images,
			});
		}
	}, []);

	// handleForm

	const onSubmit = async () => {
		var result;

		// edit

		if (id) {
			//check file change
			setLoading(true);
			if (fileList && fileList[0].originFileObj) {
				await storage
					.refFromURL(oldImage)
					.delete()
					.then(() => console.log("delete img success"))
					.catch((err) => {
						console.log(err);
					});
				// delete old file

				// create new file
				const uniqueSuffix = handleFileName(fileList[0].originFileObj.name);

				await storage
					.ref(`imagesCategory/${uniqueSuffix}`)
					.put(fileList[0].originFileObj);

				result = await storage
					.ref("imagesCategory")
					.child(uniqueSuffix)
					.getDownloadURL();
			} else {
				result = oldImage;
			}
			const newCate = {
				idEdit: id,
				name,
				desc,
				images: result,
			};
			await dispatch(updateCategory(newCate));
		} else {
			// add
			setLoading(true);
			if (fileList.length > 0) {
				const uniqueSuffix = handleFileName(fileList[0].originFileObj.name);
				await storage
					.ref(`imagesCategory/${uniqueSuffix}`)
					.put(fileList[0].originFileObj);

				const nameUrl = await storage
					.ref("imagesCategory")
					.child(uniqueSuffix)
					.getDownloadURL();

				console.log(nameUrl);
				const newCate = {
					name,
					desc,
					images: nameUrl,
				};
				await dispatch(addCategory(newCate));
			} else {
				const newCate = {
					name,
					desc,
					images: "",
				};

				await dispatch(addCategory(newCate));

				// return message.error("Ban chua chon anh ");
			}
		}

		setLoading(false);

		setTimeout(() => {
			stateCategory();
			history.push("/admin/category");
		}, 500);
	};

	const handleFileName = (value) => {
		return Date.now() + "-" + Math.round(Math.random() * 1e9) + value;
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
		message.error("Bạn chưa nhập đầy đủ thông tin");
		return;
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
	const handleOnChangeUpload = ({ fileList }) => {
		setState({ ...state, fileList });
	};

	const handleOnChange = (e) => {
		setState({
			...state,
			[e.target.id]: e.target.value,
		});
	};

	//
	const uploadButton = (
		<div>
			{loading ? <LoadingOutlined /> : <PlusOutlined />}
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	);

	const initialValues = {
		name: detailCategory ? detailCategory.name : "",
		desc: detailCategory ? detailCategory.desc : "",
	};

	return (
		<div>
			<div className="text-center heading pb-5">
				<h2> {id ? "Chỉnh sửa thể loại chụp" : "Thêm thể loại chụp"} </h2>

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
						label="Tên"
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
							beforeUpload={beforeUpload}
						>
							{fileList.length >= 1 ? null : uploadButton}
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

export default CreateOrEditCategory;

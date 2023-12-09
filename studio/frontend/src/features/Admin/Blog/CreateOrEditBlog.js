import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Form, message, Input, Button, Row, Col, Image, Select } from "antd";
import { useDispatch } from "react-redux";
import defaultImage from "assets/images/defaultImage.jpg";

//

import CKEditor from "ckeditor4-react";
import "./blogAdmin.scss";
import { fetchCategoryData } from "app/actions/cateAction";
import { fetchPlaceData } from "app/actions/placeAction";
import { getStorage, randomName } from "utils/common";
import { storage } from "firebaseConfig";
import { addBlogAction, updateBlogAction } from "app/actions/blogAction";

import { RULES_ANTD, TitleToSlug } from "./../../../constants";

const getLocalStoreBlogEdit = (str) => {
	const data = JSON.parse(localStorage.getItem("BlogEdit"));

	if (data) {
		switch (str) {
			case "id":
				return data.id;
			case "title":
				return data.title;
			case "summary":
				return data.summary;
			case "authorId":
				return data.authorId;
			case "slug":
				return data.slug;
			case "published":
				return data.published;
			case "like":
				return +data.like;
			case "image":
				return data.image;
			case "content":
				return data.content;
			case "place":
				return data.Blog_NN_Place.map((item, index) => item.id);
			case "cate":
				return data.Blog_NN_Cate.map((item, index) => item.id);
			case "cateID":
				return data.Blog_NN_Cate.map((x) => ({ CateId: x.id }));
			case "placeID":
				return data.Blog_NN_Place.map((x) => ({ PlaceId: x.id }));

			default:
				return null;
		}
	}
	return "";
};

function CreateOrEditBlog(props) {
	const dispatch = useDispatch();

	const history = useHistory();

	const { id } = useParams();

	const [loading, setLoading] = useState(false);

	const [listCate, setListCate] = useState([]);
	const [listPlace, setListPlace] = useState([]);
	const [content, setContent] = useState(
		id ? getLocalStoreBlogEdit("content") : null
	);

	const [state, setState] = useState({
		idEdit: "",

		title: id ? getLocalStoreBlogEdit("title") : "",
		summary: id ? getLocalStoreBlogEdit("summary") : "",
		slug: id ? getLocalStoreBlogEdit("slug") : "",

		like: id ? getLocalStoreBlogEdit("like") : "",

		avatar: id ? getLocalStoreBlogEdit("image") : "",
		oldAvatar: id ? getLocalStoreBlogEdit("image") : "",
		// avatar: "",
		linkImg: "",
		published: id ? getLocalStoreBlogEdit("published") : "",
		place: id ? getLocalStoreBlogEdit("placeID") : [],
		cate: id ? getLocalStoreBlogEdit("cateID") : [],
	});

	const { avatar, linkImg, oldAvatar } = state;

	const getCate = async () => {
		const data = await dispatch(fetchCategoryData());
		setListCate(data);
	};
	const getPlace = async () => {
		const data = await dispatch(fetchPlaceData());
		setListPlace(data);
	};

	useEffect(() => {
		getCate();
		getPlace();
		return () => {
			localStorage.removeItem("BlogEdit");
		};
	}, []);

	const initialValues = {
		title: id ? getLocalStoreBlogEdit("title") : "",
		summary: id ? getLocalStoreBlogEdit("summary") : "",

		slug: id ? getLocalStoreBlogEdit("slug") : "",

		like: id ? getLocalStoreBlogEdit("like") : "",

		place: id ? getLocalStoreBlogEdit("place") : [],
		cate: id ? getLocalStoreBlogEdit("cate") : [],
	};

	// console.log(initialValues, "data");
	const handleOnChange = (e) => {
		setState({
			...state,
			[e.target.id]: e.target.value,
		});
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
		setState({ ...state, cate: data });
	};
	const handleOnChangeAvatar = async (e) => {
		try {
			const newImg = (await e.target.files) ? e.target.files[0] : null;
			if (newImg) {
				await setState({
					...state,
					linkImg: URL.createObjectURL(e.target.files[0]),
					avatar: e.target.files[0],
				});
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleOnChangeCkeditor = (evt) => {
		setContent(evt.editor.getData());
	};

	// handle Submit

	const onSubmit = async () => {
		if (id) {
			setLoading(true);
			// edit
			let anh;
			if (linkImg) {
				await storage
					.refFromURL(oldAvatar)
					.delete()
					.then(() => console.log("delete img success"))
					.catch((err) => {
						console.log(err);
					});
				const uniqueSuffix =
					Date.now() + "-" + Math.round(Math.random() * 1e9) + avatar.name;
				await storage.ref(`imageBlog/${uniqueSuffix}`).put(avatar);

				anh = await storage
					.ref("imageBlog")
					.child(uniqueSuffix)
					.getDownloadURL();
			}
			const newState = {
				id: id,
				authorId: getLocalStoreBlogEdit("authorId"),

				title: state.title,
				summary: state.summary,
				image: anh ? anh : avatar,
				slug: TitleToSlug(state.slug),

				like: state.like,

				Blog_ON_Place: state.place,
				Blog_ON_Cate: state.cate,
				content: content,

				published: state.published,
			};

			dispatch(updateBlogAction(newState));
			// console.log(res, "res");

			setTimeout(() => {
				history.push("/admin/blog");
				setLoading(false);
			}, 500);
		} else {
			//add
			setLoading(true);
			const newBlog = {
				authorId: getStorage("id"),

				title: state.title,
				summary: state.summary,
				image: "",
				slug: TitleToSlug(state.slug),

				like: state.like,

				Blog_ON_Place: state.place,
				Blog_ON_Cate: state.cate,
				content: content,

				published: false,
			};

			if (avatar) {
				const uniqueSuffix = randomName(avatar.name);
				await storage.ref(`imageBlog/${uniqueSuffix}`).put(avatar);
				const anh =
					(await storage
						.ref("imageBlog")
						.child(uniqueSuffix)
						.getDownloadURL()) || "";

				newBlog.image = anh;
				// console.log(newBlog, "newBlog");
				dispatch(addBlogAction(newBlog));
				history.goBack();
				setLoading(false);
			} else {
				// console.log(newBlog, "newBlog");
				dispatch(addBlogAction(newBlog));

				setTimeout(() => {
					history.goBack();
					setLoading(false);
				}, 500);
			}
		}
	};

	const layout = {
		labelCol: {
			span: 24,
		},
		wrapperCol: {
			span: 24,
		},
	};
	const tailLayout = {
		wrapperCol: { offset: 0, span: 0 },
	};
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
		message.error("Bạn chưa nhập đầy đủ thông tin");
		return;
	};

	return (
		<div className="blogEditAdmin">
			<div className="text-center heading pb-5">
				<h2> {id ? "Chỉnh sửa blog" : "Thêm blog"} </h2>

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
				onChange={handleOnChange}
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
							name="summary"
							label="Tóm tắt"
							hasFeedback
							rules={RULES_ANTD.text}
						>
							<Input />
						</Form.Item>
						<Form.Item
							name="slug"
							label="Slug"
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

						<Form.Item name="cate" label="Thể loại">
							<Select
								mode="multiple"
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

						<Form.Item
							name="like"
							label="Lượt thích"
							hasFeedback
							rules={RULES_ANTD.isNumber}
						>
							<Input min={0} type="number" />
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
									re
									className="img-thumbnail imageMain"
								/>
							) : (
								<Image
									src={avatar ? avatar : defaultImage}
									className="img-thumbnail imageMain"
								/>
							)}
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

				{/* button */}
				<Form.Item {...tailLayout}>
					<Button loading={loading} type={"primary"} htmlType="submit">
						{id ? "Sửa" : "Thêm"}
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
}

export default CreateOrEditBlog;

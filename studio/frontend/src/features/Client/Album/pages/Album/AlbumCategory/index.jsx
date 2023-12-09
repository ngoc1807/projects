import React, { useEffect, useState } from "react";
import "./AlbumCategory.scss";
import { placeData } from "features/Admin/Place/placeSlide";
import { categoryData } from "features/Admin/Category/categorySlide";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "antd";
import { sortAlbumAction } from "app/actions/albumAction";
function AlbumCategory(props) {
	const dispatch = useDispatch();
	const listPlace = useSelector((state) => state.place.place);
	const listCate = useSelector((state) => state.category.category);

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
		await dispatch(sortAlbumAction(state));
		// console.log(state, "state");
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
		// console.log("checked = ", checkedValues);

		setSate({ ...state, place: checkedValues });
	};
	const onChangeCheckboxCate = (checkedValues) => {
		// console.log("checked = ", checkedValues);
		setSate({ ...state, cate: checkedValues });
	};

	const optCate = optionsCate();
	const optPlace = optionsPlace();

	return (
		<div className="BlogRight  container-fluid">
			<div className="Box row">
				<div className="BoxTitle col-12">
					<div>Thể loại</div>
				</div>
				<div className="col-12">
					<div className="BoxCate row">
						<Checkbox.Group
							className="BoxCate-item"
							options={optCate}
							onChange={onChangeCheckboxCate}
						/>
					</div>
				</div>
			</div>

			<div className="Box row">
				<div className="BoxTitle col-12">
					<div>Địa điểm</div>
				</div>
				<div className="col-12">
					<div className="BoxCate row">
						<Checkbox.Group
							className="BoxCate-item"
							options={optPlace}
							onChange={onChangeCheckboxPlace}
						/>
					</div>
				</div>
			</div>

			<div className="Box row">
				<div className="BoxTitle col-12">
					<div>Liên hệ với chúng tôi</div>
				</div>

				<div className="BoxContent">
					<a
						href="https://www.facebook.com/dang.hiem"
						className="face"
						target="_blank"
					>
						<i className="fab fa-facebook-f"></i>
					</a>
					<a
						href="https://www.instagram.com/hyastudio.vn/"
						className="instagram"
						target="_blank"
					>
						<i className="fab fa-instagram"></i>
					</a>
				</div>
			</div>
		</div>
	);
}

export default AlbumCategory;

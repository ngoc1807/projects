import React from "react";
import "./Search.scss";
import { Input } from "antd";

const { Search } = Input;
function index(props) {
	const { handleSearch } = props;

	const onSearch = (value) => {
		if (handleSearch) {
			handleSearch(value);
		}
	};
	return (
		<div className="SearchAntd">
			<Search
				placeholder="Tìm kiếm "
				allowClear
				enterButton="Tìm kiếm"
				size="large"
				onSearch={onSearch}
			/>
		</div>
	);
}

export default index;

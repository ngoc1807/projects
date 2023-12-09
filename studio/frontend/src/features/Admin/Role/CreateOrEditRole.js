import React, { useEffect, useState } from "react";
import { Form, message, Input, Button } from "antd";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addRole, roleData, updateRole } from "./roleSlide";

CreateOrEditRoleAdmin.propTypes = {};

function CreateOrEditRoleAdmin(props) {
	const { id } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();

	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({ idEdit: "", name: "" });

	const detailRole = useSelector((state) =>
		state.role.role.find((x) => x.id === +id)
	);

	const stateRole = async () => {
		await dispatch(roleData());
	};
	const handleOnChange = (e) => {
		setState({
			...state,
			[e.target.id]: e.target.value,
		});
	};

	useEffect(() => {
		if (id) {
			setState({
				idEdit: id,
				name: state.name,
			});
		}
	}, []);

	const initialValues = {
		name: detailRole ? detailRole.name : "",
	};

	const onSubmit = async () => {
		setLoading(true);

		if (id) {
			await dispatch(updateRole(state));
		} else {
			await dispatch(addRole(state));
		}
		setLoading(false);

		setTimeout(() => {
			stateRole();

			history.push("/admin/role");
		}, 500);
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
		message.error("Bạn chưa nhập đầy đủ thông tin");
		return;
	};

	return (
		<div>
			<div className="text-center heading pb-5">
				<h2> {id ? "Chỉnh sửa quyền" : "Thêm quyền"} </h2>

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
					initialValues={initialValues}
					onFinish={onSubmit}
					onFinishFailed={onFinishFailed}
					onChange={handleOnChange}
				>
					<Form.Item
						name="name"
						label="Tên quyền"
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

export default CreateOrEditRoleAdmin;

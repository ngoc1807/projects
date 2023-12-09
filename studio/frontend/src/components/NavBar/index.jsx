import { Dropdown, Menu } from "antd";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.scss";
// import imgUser from "assets/images/icons/user-default.png";
import { useSelector } from "react-redux";
import defaultImage from "assets/images/defaultImage.jpg";

import { getStorage } from "utils/common";
function ClientNavBar(props) {
	const user = useSelector((state) => state.user.user);

	const isAuth = getStorage("isAuth");
	const logOut = () => {
		sessionStorage.removeItem("accessJWT");
		localStorage.clear();
	};

	const menuUser = (
		<Menu>
			<Menu.Item key="0">
				<a href="/user/profile">Thông tin cá nhân</a>
			</Menu.Item>
			<Menu.Item key="1">
				<a href="/user/blog"> Bài viết</a>
			</Menu.Item>
			<Menu.Item key="2">
				<a href="/user/album">Album ảnh</a>
			</Menu.Item>
			<Menu.Item key="3">
				<a href="/user/order">Lịch sửa đặt </a>
			</Menu.Item>

			<Menu.Divider />
			<Menu.Item key="2">
				<a href="/" onClick={logOut}>
					Đăng xuất
				</a>
			</Menu.Item>
		</Menu>
	);

	const menu = (
		<Menu>
			<Menu.Item key="1">
				<Link to="/admin">Quản trị</Link>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item key="2">
				<a href="/" onClick={logOut}>
					Đăng xuất
				</a>
			</Menu.Item>
		</Menu>
	);

	const check = () => {
		if (user && user.role === "admin") {
			return menu;
		}
		if (user && user.role === "user") {
			return menuUser;
		}
	};

	return (
		<div className="configNavBig container-fluid ">
			<div className="row">
				<div className="m-0 logo col-lg-2 col-sm-12 col-md-12">
					<a href="/">
						<span className="icon">
							<i className="fa fa-camera"></i>
						</span>
						<span className="text"> HYA </span>
					</a>
				</div>

				<div className="list col-lg-8 col-sm-12 col-md-12">
					<NavLink exact to="/home" activeClassName="active">
						<div className="list-home">Trang chủ</div>
					</NavLink>

					<div className="list-group">
						<NavLink exact to="/home/album" activeClassName="active">
							<div className="list-album">Album</div>
						</NavLink>
						<div className="list-album-item">
							<a href="/">Thể loại</a>
							<a href="/">Địa điểm</a>
							<a href="/">Album</a>
						</div>
					</div>

					<div className="list-group">
						<NavLink exact to="/home/booking" activeClassName="active">
							<div className="list-service">Đặt lịch</div>
						</NavLink>
						{/* <div className="list-service-item">
              <a href="/">Booking</a>
              <a href="/">Store</a>
              <a href="/">MakeUp</a>
            </div> */}
					</div>

					<NavLink exact to="/home/blog" activeClassName="active">
						<div className="list-blog"> Blog</div>
					</NavLink>
					{/* <NavLink exact to="/home/products" activeClassName="active">
						{" "}
						<div className="list-products">Sản phẩm</div>
					</NavLink> */}
				</div>

				<div className="login col-lg-2 col-md-12 col-lg-2">
					{isAuth ? (
						<Dropdown overlay={check()} trigger={["click"]}>
							<div className="navbarImage">
								<img
									src={
										user && user.avatar ? user.avatar : defaultImage
									}
									alt=""
								/>
							</div>
						</Dropdown>
					) : (
						<div>
							<a href="/login/signIn" className="linkSignIn">
								Đăng nhập
							</a>
							/
							<a href="login/signUp" className="linkSignUp">
								Đăng kí
							</a>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default ClientNavBar;

import React, { useState, useEffect } from "react";

import { Layout, Menu } from "antd";

import "./index.scss";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import {
	Link,
	Route,
	Switch,
	useHistory,
	useRouteMatch,
} from "react-router-dom";

import NotFound from "components/Notfound";

import { GetUrlMenu } from "../../constants";

import { useDispatch } from "react-redux";
import ProfileUser from "./profile/index.jsx";

import BlogUser from "./blog/index";
import CreateOrEditBlog from "./blog/CreateOrEditBlog";
import ChangePass from "./changepass";
import AlbumForUser from "./album";
import DetailAlbumForUser from "./album/detailAlbum";
import OrderUser from "./order";
const { Header, Footer, Sider, Content } = Layout;

function User(props) {
	const match = useRouteMatch();
	// console.log(match);
	const history = useHistory();

	const { pathname } = history.location;

	const linkMenu = GetUrlMenu(pathname);
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed(!collapsed);
	};

	const dispatch = useDispatch();

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div className="logo">
					<Link to="/home">
						<div className="text-center p-2 text-white  w-100">
							{collapsed ? (
								<i className="fas  fa-home"></i>
							) : (
								<strong> Trang chủ </strong>
							)}
						</div>
					</Link>
				</div>
				<Menu
					theme="dark"
					mode="inline"
					selectedKeys={[linkMenu]}
					defaultOpenKeys={["/user/profile"]}
				>
					<Menu.Item
						key="/user/profile"
						icon={
							collapsed === true ? (
								<span className="fas fa-user"></span>
							) : (
								<span className="fas fa-user mr-2"></span>
							)
						}
					>
						<Link to="/user/profile">Thông tin cá nhân </Link>
					</Menu.Item>
					<Menu.Item
						key="/user/blog"
						icon={
							collapsed === true ? (
								<span className="fas fa-newspaper"></span>
							) : (
								<span className="fas fa-newspaper mr-2"></span>
							)
						}
					>
						<Link to="/user/blog">Bài viết</Link>
					</Menu.Item>

					<Menu.Item
						key="/user/album"
						icon={
							collapsed === true ? (
								<span className="far fa-image"></span>
							) : (
								<span className="far fa-image mr-2"></span>
							)
						}
					>
						<Link to="/user/album">Album ảnh</Link>
					</Menu.Item>

					<Menu.Item
						key="/user/order"
						icon={
							collapsed === true ? (
								<span className="fas fa-shopping-cart"></span>
							) : (
								<span className="fas fa-shopping-cart mr-2"></span>
							)
						}
					>
						<Link to="/user/order">Lịch chụp</Link>
					</Menu.Item>

					<Menu.Item
						key="/user/changePass"
						icon={
							collapsed === true ? (
								<span className="fas fa-cog"></span>
							) : (
								<span className="fas fa-cog mr-2"></span>
							)
						}
					>
						<Link to="/user/changePass">Đổi mật khẩu</Link>
					</Menu.Item>
				</Menu>
			</Sider>

			{/* ===================================================================== */}

			<Layout className="site-layout userCMS ">
				<Header className="site-layout-background" style={{ padding: 0 }}>
					{React.createElement(
						collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
						{
							className: "trigger",
							onClick: onToggle,
						}
					)}
				</Header>
				<Content
					className="site-layout-background"
					style={{
						margin: "24px 16px",
						padding: 24,
						minHeight: 280,
					}}
				>
					<Switch>
						<Route
							exact
							path={`${match.url}/profile`}
							component={ProfileUser}
						/>

						{/* ===================================================================== */}

						<Route exact path={`${match.url}/profile`}>
							<ProfileUser url={`${match.url}`} />
						</Route>

						<Route exact path={`${match.url}/blog`}>
							<BlogUser url={`${match.url}`} />
						</Route>

						<Route exact path={`${match.url}/blog/CreateOrEditBlog`}>
							<CreateOrEditBlog url={`${match.url}`} />
						</Route>

						<Route exact path={`${match.url}/blog/CreateOrEditBlog/:id`}>
							<CreateOrEditBlog url={`${match.url}`} />
						</Route>

						{/* ===================================================================== */}
						<Route exact path={`${match.url}/album`}>
							<AlbumForUser url={`${match.url}`} />
						</Route>
						<Route
							exact
							path={`${match.url}/album/DetailAlbumForUser/:id`}
						>
							<DetailAlbumForUser url={`${match.url}`} />
						</Route>

						{/* ===================================================================== */}
						<Route exact path={`${match.url}/order`}>
							<OrderUser url={`${match.url}`} />
						</Route>
						{/* <Route
							exact
							path={`${match.url}/album/DetailAlbumForUser/:id`}
						>
							<DetailAlbumForUser url={`${match.url}`} />
						</Route> */}

						{/* ===================================================================== */}

						<Route exact path={`${match.url}/changePass`}>
							<ChangePass url={`${match.url}`} />
						</Route>

						<Route component={NotFound} />
					</Switch>
				</Content>
				<Footer style={{ textAlign: "center" }}>
					HYA Created by Q_Ngoc
				</Footer>
			</Layout>
		</Layout>
	);
}

export default User;

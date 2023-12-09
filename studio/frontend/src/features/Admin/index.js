import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
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
import DashboardAdmin from "./Dashboard";
import UserAdmin from "./User";
import CreateOrEditUser from "./User/CreateOrEditUser";
import RoleAdmin from "./Role";
import CreateOrEditRole from "./Role/CreateOrEditRole";
import AlbumAdmin from "./Album";
import CreateOrEditAlbum from "./Album/CreateOrEditAlbum";
import PlaceAdmin from "./Place";
import CreateOrEditPlace from "./Place/CreateOrEditPlace";
import CreateOrEditCategory from "./Category/CreateOrEditCategory";
import CategoryAdmin from "./Category";
import BlogAdmin from "./Blog";
import CreateOrEditBlog from "./Blog/CreateOrEditBlog";
import { GetUrlMenu } from "./../../constants";
import TourAdmin from "./Tour";
import CreateOrEditTour from "./Tour/CreateOrEditTour";
import { useDispatch } from "react-redux";

import { roleData } from "features/Admin/Role/roleSlide";
import { dataListUser } from "app/slice/listUserSlice";

import { placeData } from "features/Admin/Place/placeSlide";
import { categoryData } from "features/Admin/Category/categorySlide";
import OrderAdmin from "./Order";
import UserAlbumAdmin from "./UserAlbum";
import CommentAdmin from "./comment";

const { Header, Footer, Sider, Content } = Layout;

function Admin(props) {
	const match = useRouteMatch();

	const history = useHistory();

	const { pathname } = history.location;

	const linkMenu = GetUrlMenu(pathname);
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed(!collapsed);
	};

	const dispatch = useDispatch();

	const stateListUser = async () => {
		await dispatch(dataListUser());
	};

	const stateRole = async () => {
		await dispatch(roleData());
	};

	const statePlace = async () => {
		await dispatch(placeData());
	};

	const stateCategory = async () => {
		await dispatch(categoryData());
	};

	useEffect(() => {
		try {
			stateListUser();
			stateRole();
			statePlace();
			stateCategory();
		} catch (error) {
			throw error;
		}
	}, []);

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div className="logo">
					<a href="/home">
						<div className="text-center p-2 text-white  w-100">
							{collapsed ? (
								<i className="fas  fa-home"></i>
							) : (
								<strong> Home </strong>
							)}
						</div>
					</a>
				</div>
				<Menu
					theme="dark"
					mode="inline"
					selectedKeys={[linkMenu]}
					defaultOpenKeys={["/admin"]}
				>
					<Menu.Item
						key="/admin"
						icon={
							collapsed === true ? (
								<span className="fas fa-tachometer-alt"></span>
							) : (
								<span className="fas fa-tachometer-alt mr-2"></span>
							)
						}
					>
						<Link to="/admin">Thống kê</Link>
					</Menu.Item>
					<Menu.Item
						key="/admin/user"
						icon={
							collapsed === true ? (
								<span className="fas fa-users"></span>
							) : (
								<span className="fas fa-users mr-2"></span>
							)
						}
					>
						<Link to="/admin/user">Quản lí tài khoản</Link>
					</Menu.Item>
					<Menu.Item
						key="/admin/role"
						icon={
							collapsed === true ? (
								<span className="fas fa-users-cog"></span>
							) : (
								<span className="fas fa-users-cog mr-2"></span>
							)
						}
					>
						<Link to="/admin/role">Phân quyền</Link>
					</Menu.Item>

					<Menu.Item
						key="/admin/album"
						icon={
							collapsed === true ? (
								<span className="far fa-image"></span>
							) : (
								<span className="far fa-image mr-2"></span>
							)
						}
					>
						<Link to="/admin/album">Album</Link>
					</Menu.Item>
					<Menu.Item
						key="/admin/place"
						icon={
							collapsed === true ? (
								<span className="fas fa-map-marker-alt"></span>
							) : (
								<span className="fas fa-map-marker-alt mr-2"></span>
							)
						}
					>
						<Link to="/admin/place">Địa điểm</Link>
					</Menu.Item>

					<Menu.Item
						key="/admin/category"
						icon={
							collapsed === true ? (
								<span className="fas fa-tags"></span>
							) : (
								<span className="fas fa-tags mr-2"></span>
							)
						}
					>
						<Link to="/admin/category">Thể loại</Link>
					</Menu.Item>

					<Menu.Item
						key="/admin/blog"
						icon={
							collapsed === true ? (
								<span className="fas fa-newspaper"></span>
							) : (
								<span className="fas fa-newspaper mr-2"></span>
							)
						}
					>
						<Link to="/admin/blog">Blog</Link>
					</Menu.Item>

					<Menu.Item
						key="/admin/tour"
						icon={
							collapsed === true ? (
								<span className="fas fa-plane"></span>
							) : (
								<span className="fas fa-plane mr-2"></span>
							)
						}
					>
						<Link to="/admin/tour">Gói chụp</Link>
					</Menu.Item>
					<Menu.Item
						key="/admin/order"
						icon={
							collapsed === true ? (
								<span className="fas fa-shopping-cart"></span>
							) : (
								<span className="fas fa-shopping-cart mr-2"></span>
							)
						}
					>
						<Link to="/admin/order">Order</Link>
					</Menu.Item>
					<Menu.Item
						key="/admin/user-album"
						icon={
							collapsed === true ? (
								<span className="fas fa-link"></span>
							) : (
								<span className="fas fa-link mr-2"></span>
							)
						}
					>
						<Link to="/admin/user-album">Album for user</Link>
					</Menu.Item>

					<Menu.Item
						key="/admin/comment"
						icon={
							collapsed === true ? (
								<span className="fas fa-comments"></span>
							) : (
								<span className="fas fa-comments mr-2"></span>
							)
						}
					>
						<Link to="/admin/comment">Comment</Link>
					</Menu.Item>
				</Menu>
			</Sider>

			{/* ===================================================================== */}

			<Layout className="site-layout adminCMS ">
				<Header
					className="site-layout-background"
					style={{ padding: 0 }}
				></Header>
				<Content
					className="site-layout-background"
					style={{
						margin: "24px 16px",
						padding: 24,
						minHeight: 280,
					}}
				>
					<Switch>
						<Route exact path={match.url} component={DashboardAdmin} />

						{/* ===================================================================== */}

						<Route exact path={`${match.url}/user`}>
							<UserAdmin url={`${match.url}`} />
						</Route>

						<Route exact path={`${match.url}/user/CreateOrEditUser`}>
							<CreateOrEditUser url={`${match.url}`} />
						</Route>
						<Route exact path={`${match.url}/user/CreateOrEditUser/:id`}>
							<CreateOrEditUser url={`${match.url}`} />
						</Route>

						{/* ===================================================================== */}

						<Route exact path={`${match.url}/role`}>
							<RoleAdmin url={`${match.url}`} />
						</Route>

						<Route exact path={`${match.url}/role/CreateOrEditRole`}>
							<CreateOrEditRole url={`${match.url}`} />
						</Route>

						<Route exact path={`${match.url}/role/CreateOrEditRole/:id`}>
							<CreateOrEditRole url={`${match.url}`} />
						</Route>

						{/* ===================================================================== */}

						<Route exact path={`${match.url}/album`}>
							<AlbumAdmin url={`${match.url}`} />
						</Route>

						<Route exact path={`${match.url}/album/CreateOrEditAlbum`}>
							<CreateOrEditAlbum url={`${match.url}`} />
						</Route>

						<Route
							exact
							path={`${match.url}/album/CreateOrEditAlbum/:id`}
						>
							<CreateOrEditAlbum url={`${match.url}`} />
						</Route>

						{/* ===================================================================== */}

						<Route exact path={`${match.url}/place`}>
							<PlaceAdmin url={`${match.url}`} />
						</Route>

						<Route exact path={`${match.url}/place/CreateOrEditPlace`}>
							<CreateOrEditPlace url={`${match.url}`} />
						</Route>

						<Route
							exact
							path={`${match.url}/place/CreateOrEditPlace/:id`}
						>
							<CreateOrEditPlace url={`${match.url}`} />
						</Route>

						{/* ===================================================================== */}

						<Route exact path={`${match.url}/category`}>
							<CategoryAdmin url={`${match.url}`} />
						</Route>

						<Route
							exact
							path={`${match.url}/category/CreateOrEditCategory`}
						>
							<CreateOrEditCategory url={`${match.url}`} />
						</Route>

						<Route
							exact
							path={`${match.url}/category/CreateOrEditCategory/:id`}
						>
							<CreateOrEditCategory url={`${match.url}`} />
						</Route>

						{/* ===================================================================== */}

						<Route exact path={`${match.url}/blog`}>
							<BlogAdmin url={`${match.url}`} />
						</Route>

						<Route exact path={`${match.url}/blog/CreateOrEditBlog`}>
							<CreateOrEditBlog url={`${match.url}`} />
						</Route>

						<Route exact path={`${match.url}/blog/CreateOrEditBlog/:id`}>
							<CreateOrEditBlog url={`${match.url}`} />
						</Route>
						{/* ===================================================================== */}
						<Route exact path={`${match.url}/tour`}>
							<TourAdmin url={`${match.url}`} />
						</Route>

						<Route exact path={`${match.url}/tour/CreateOrEditTour`}>
							<CreateOrEditTour url={`${match.url}`} />
						</Route>

						<Route exact path={`${match.url}/tour/CreateOrEditTour/:id`}>
							<CreateOrEditTour url={`${match.url}`} />
						</Route>
						{/* ===================================================================== */}

						<Route exact path={`${match.url}/order`}>
							<OrderAdmin url={`${match.url}`} />
						</Route>

						{/* ===================================================================== */}

						<Route exact path={`${match.url}/user-album`}>
							<UserAlbumAdmin url={`${match.url}`} />
						</Route>

						{/* ===================================================================== */}
						<Route exact path={`${match.url}/comment`}>
							<CommentAdmin url={`${match.url}`} />
						</Route>
						{/* ===================================================================== */}

						<Route component={NotFound} />
					</Switch>
				</Content>
				<Footer style={{ textAlign: "center" }}>HYA Created by Ngọc</Footer>
			</Layout>
		</Layout>
	);
}

export default Admin;

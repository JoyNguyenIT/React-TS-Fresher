import { useCurrentApp } from "components/context/app.context"
import { FaReact } from "react-icons/fa"
import 'components/layout/app.header.scss'
import { VscSearchFuzzy } from "react-icons/vsc"
import { ShoppingCartOutlined } from "@ant-design/icons"
import { Avatar, Badge, Dropdown, MenuProps, notification, Space, Button, Drawer, Divider } from "antd"
import { Link, useNavigate } from "react-router-dom"
import { logoutAPI } from "@/services/api"
import { useState } from "react"

const AppHeader = () => {
    const { user, setIsAuthenticated, isAuthenticated, setUser, urlAvatar } = useCurrentApp()
    const navigate = useNavigate();
    const [openDrawer, setOpenDrawer] = useState(false)

    const items: MenuProps['items'] = [
        {
            label: (
                <label
                    style={
                        { cursor: "pointer" }}
                    onClick={() => alert('me')}
                >Quản lý tài khoản
                </label>
            ),
            key: 'account',

        },
        {
            key: 'admin',
            label: (
                <Link to={'/history'}>Lịch sử mua hàng</Link>
            ),
        },
        {
            key: 'logout',
            label: (
                <label
                    style={
                        { cursor: "pointer" }
                    }
                    onClick={() => handleLogout()}
                >
                    Đăng xuất
                </label>
            ),
        },
    ];
    if (user?.role === 'ADMIN') {
        items.unshift(
            {
                key: 'admin',
                label: (
                    <Link to={'/admin'}> Trang Quản trị</Link>
                )
            }
        )
    }
    const handleLogout = async () => {
        const res = await logoutAPI()
        if (res.data) {
            setIsAuthenticated(false)
            setUser(null)
            localStorage.removeItem('accessToken')
        }

        notification.success({
            message: 'Thông báo',
            description: res.message,
            placement: 'topRight',
        });

    }
    return (
        <div className="header-container">

            <div className="title-icon-name" onClick={() => navigate('/')}>
                <span>
                    <FaReact className="react-icon" />
                </span>
                <span className="title-name">Joy Nguyễn IT</span>
            </div>
            <div className="toggle-menu" onClick={() => setOpenDrawer(true)}>
                &#x2630;
            </div>
            <div className="search-input">
                <span >
                    <VscSearchFuzzy className="search-icon" />
                </span>
                <input
                    className="input-item"
                    type="text"
                    placeholder="Bạn tìm gì hôm nay"
                />
                {/* {JSON.stringify(user)} */}
            </div>
            <div className="shopping-cart">
                <span>
                    <Badge
                        size="small"
                        count={10}
                        overflowCount={10} >
                        <ShoppingCartOutlined className="cart-icon" />
                    </Badge>
                </span>
            </div>
            {isAuthenticated === false ?
                <Link to={'login'}>
                    <Button className="login-button">Đăng nhập</Button>
                </Link>
                :
                <div className="avatar-user">
                    <Dropdown menu={{ items }} placement="bottom" trigger={["click"]}>
                        <Space>
                            <Avatar src={urlAvatar} />{user?.fullName}
                        </Space>
                    </Dropdown>
                </div>
            }
            <Drawer
                title="Menu chức năng"
                placement="left"
                onClose={() => setOpenDrawer(false)}
                open={openDrawer}
                width='250px'
            >
                <p>Quản lý tài khoản</p>
                <Divider />

                <p>Đăng xuất</p>
                <Divider />
            </Drawer>
        </div>
    )
}

export default AppHeader
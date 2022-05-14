import { Menu } from "antd"
import MenuItem from "antd/lib/menu/MenuItem"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Navigation() {
    const router = useSelector(state => state.router)
    return (
        <Menu mode="horizontal" selectedKeys={[router.location.pathname]}>
            <MenuItem key="/">
              <Link to="/">首页</Link>
            </MenuItem>
            <MenuItem key="/shop">
              <Link to="/shop">商城</Link>
            </MenuItem>
            <MenuItem key="/signin">
              <Link to="/signin">登录</Link>
            </MenuItem>
            <MenuItem key="/signup">
              <Link to="/signup">注册</Link>
            </MenuItem>
        </Menu>
    )
}

export default Navigation
import { Form, Input, Button } from "antd"
import Layout from "./Layout"
import { useDispatch} from 'react-redux'
import { signup } from "../../store/actions/signup"

function Signup() {
    const dispatch = useDispatch()
    const handleOnFinish = value => {
      dispatch(signup(value))
    }
    return (
      <Layout title="注册" subTitle="">
          <Form onFinish={handleOnFinish}>
            <Form.Item label="用户名" name="username">
              <Input />
            </Form.Item>
            <Form.Item label="密码" name="password">
              <Input />
            </Form.Item>
            <Form.Item label="邮箱" name="email">
              <Input />
            </Form.Item>
            <Form.Item >
              <Button type="primary" htmlType="submit">注册</Button>
            </Form.Item>
          </Form>
      </Layout>
    )
}

export default Signup
import { Form, Input, Button, Checkbox } from "antd"
import { useSelector } from "react-redux"
import Layout from "./Layout"

function Signin() {
    const state = useSelector(state => state)
    return (
        <Layout title="登录" subTitle="">
           <Form>
               <Form.Item label="用户名" name="username">
                   <Input />
               </Form.Item>
               <Form.Item label="密码" name="password">
                   <Input />
               </Form.Item>
               <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}>
                  <Checkbox>Remember me</Checkbox>
               </Form.Item>
               <Form.Item>
                   <Button type="primary" htmlType="submit">登录</Button>
               </Form.Item>
           </Form> 
        </Layout>
    )
}

export default Signin
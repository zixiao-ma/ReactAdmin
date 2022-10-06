/**
 * @author MaZiXiao
 * @date 2022-10-06 20:21
 */
import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Checkbox, Form, Input} from 'antd';
import './login.scss'
import {login} from "../../store/actions/user";

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loginLoading, setLoginLoading] = useState(false);
    const handleLogin = async (val) => {
        setLoginLoading(true)
        try {
            await dispatch(login(val))
            navigate('/')
        } catch (e) {
        }
        setLoginLoading(false)
    }
    return (
        <div className="Login-container">
            <div className="loginTitle">
                <h2>Admin System</h2>
            </div>
            <div className="loginBox">

                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                        username: 'admin',
                        password: 'admin'
                    }}
                    onFinish={handleLogin}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>记住密码</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" style={{float: 'right'}}>
                            忘记密码？
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" block={true} htmlType="submit" loading={loginLoading}
                                className="login-form-button">
                            立即登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default Login;

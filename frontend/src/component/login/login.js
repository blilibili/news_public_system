import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { message } from 'antd';
import {requestLogin} from '../../api/users/post/login'
import '../../assets/login.css'

const FormItem = Form.Item;

class Login extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                requestLogin(values).then((res) => {
                    res.data.status == 0?message.success(res.data.msg) : message.error(res.data.msg);
                    this.props.history.push("/admin/index");
                })
            }
        });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{position:'absolute' , top:'50%' , marginTop:-200 + 'px' , height:400 + 'px' , border:1 + 'px solid rgba(150,150,150,0.3)',width:600+'px' , left:'50%' , marginLeft:-300 + 'px'}}>
                <div className="login-title">
                    新闻发布系统登录
                </div>
                <div className="login-form-box">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                            )}
                        </FormItem>
                        <FormItem>
                            <div>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>记住我</Checkbox>
                                )}
                                <a className="login-form-forgot" href="">忘记密码</a>
                            </div>
                            <div>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
                                </Button>
                                <a href="#">马上注册!</a>
                            </div>
                        </FormItem>
                    </Form>
                </div>
            </div>
        )
    }
}

const WrappedNormalLoginForm = Form.create()(Login);

export default withRouter(WrappedNormalLoginForm)
import React, { Component } from 'react';
import MenuComponent from '../common/menu'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { message } from 'antd';
import {requestAddNews} from "../../api/news/post/add";
const { TextArea } = Input;
const FormItem = Form.Item;

class NewsPublic extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                requestAddNews(values).then((res) => {
                    res.data.status == 0?message.success(res.data.msg) : message.error(res.data.msg);
                    this.props.history.push("/admin/news/all");
                })
            }
        });
    };
    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 2 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        return(
            <div>
                <MenuComponent />
                <div style={{width:'80%' , float:'right'}}>
                    <Form layout='horizontal' style={{width:'60%' , margin:'40px auto' , textAlign:'left'}} onSubmit={this.handleSubmit} className="login-form">
                        <FormItem {...formItemLayout} label="新闻标题">
                            {getFieldDecorator('title', {
                                rules: [{ required: true, message: '请输入新闻标题!' }],
                            })(
                                <Input placeholder="请输入新闻标题" />
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="内容标签">
                            {getFieldDecorator('tag', {
                                rules: [{ required: false, message: '请输入新闻标题!' }],
                            })(
                                <Input placeholder="请输入新闻标签" />
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="新闻内容">
                            {getFieldDecorator('content', {
                                rules: [{ required: true, message: '请不要填空内容!' }],
                            })(
                                <TextArea rows={6} placeholder="新闻内容 ..." />
                            )}
                        </FormItem>
                        <Button style={{position:'relative' , left:'78px'}} type="primary" htmlType="submit" className="login-form-button">
                            提交
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}
const WrappedNormalNewsPublicForm = Form.create()(NewsPublic);

export default WrappedNormalNewsPublicForm
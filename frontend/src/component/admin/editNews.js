import React, { Component } from 'react';
import MenuComponent from '../common/menu'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { message } from 'antd';
import {requestAddNews} from "../../api/news/post/add";
import {requestGetOneNews} from '../../api/news/get/getOneNews'
const { TextArea } = Input;
const FormItem = Form.Item;

class EditNews extends Component{
    constructor(props){
        super(props);
        this.state = {
            newsData: []
        };
        let queryParams = {
            id : this.props.match.params.id
        };
        requestGetOneNews(queryParams).then((res) => {
            this.setState({newsData: res.data.data[0]});
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                values.id = this.state.newsData.id;
                requestAddNews(values).then((res) => {
                    res.data.status == 0?message.success(res.data.msg) : message.error(res.data.msg);
                    this.props.history.push("/admin/news/all");
                })
            }
        });
    };
    render(){
        if(this.state.newsData.length === 0){
            return (
                <div>数据空</div>
            )
        }else{
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
                                    initialValue:this.state.newsData.title
                                })(
                                    <Input placeholder="请输入新闻标题" />
                                )}
                            </FormItem>
                            <FormItem {...formItemLayout} label="内容标签">
                                {getFieldDecorator('tag', {
                                    rules: [{ required: false, message: '请输入新闻标题!' }],
                                    initialValue:this.state.newsData.tag
                                })(
                                    <Input placeholder="请输入新闻标签" />
                                )}
                            </FormItem>
                            <FormItem {...formItemLayout} label="新闻内容">
                                {getFieldDecorator('content', {
                                    rules: [{ required: true, message: '请不要填空内容!' }],
                                    initialValue:this.state.newsData.content
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
}

const WrappedNormalNewsEditForm = Form.create()(EditNews);

export default WrappedNormalNewsEditForm
import React, { Component } from 'react';
import { Table, Icon, Divider , Button } from 'antd';
import {requestGetAllNews} from '../../api/news/get/getAllNews'
import {requestDelNews} from '../../api/news/post/del'
import { message } from 'antd';
import MenuComponent from '../common/menu'

class AllNews extends Component{
    editorHandler = (text) => {
        this.props.history.push("/admin/news/edit/" + text.id);
    }

    delHandler = (text) => {
        let data = {
            id:text.id
        }
        requestDelNews(data).then((res) => {
            res.data.status == 0?message.success(res.data.msg) : message.error(res.data.msg);
            this.props.history.push("/news/reload");
        })
    }
    constructor(props) {
        super(props);
        //路由写入localstorge
        window.localStorage.setItem("route" , this.props.location.pathname);
        this.state = {
            newsData: []
        };
        requestGetAllNews({}).then((res) => {
            // 设置 initial state
            this.setState({newsData: res.data.data});
        })
        this.columns = [{
            title: '新闻标题',
            dataIndex: 'title',
            key: 'title',
        }, {
            title: '新闻内容',
            dataIndex: 'content',
            key: 'content',
        }, {
            title: '新闻标签',
            dataIndex: 'tag',
            key: 'tag',
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <span>
                  <Button type="primary" size="small" style={{marginRight:'20px'}} onClick={()=>this.editorHandler(text)}>编辑</Button>
                  <Button type="danger" size="small" onClick={()=>this.delHandler(text)}>删除</Button>
                </span>
            ),
        }];
    }

    render(){
        if(this.state.newsData.length === 0){
            return (
                <div>数据空</div>
            )
        }else{
            return (
                <div>
                    <MenuComponent />
                    <div style={{width:'85%' , float:'right' , padding:'20px'}}>
                        <Table columns={this.columns} dataSource={this.state.newsData} rowKey="id" />
                    </div>
                </div>
            )
        }
    }
}

export default AllNews;
import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import {withRouter} from "react-router-dom";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MenuComponent extends Component{
    handleClick = (e) => {
        this.props.history.push(e.key);
    }
    render() {
        return (
            <Menu
                onClick={this.handleClick}
                style={{ width: 256 , textAlign:'left' , minHeight:1000 + 'px' , float:'left' }}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>新闻操作</span></span>}>
                    <Menu.Item key="/admin/news/public">发布新闻</Menu.Item>
                    <Menu.Item key="/admin/news/all">已发布新闻</Menu.Item>
                    <Menu.Item key="/admin/adver/public">发布广告</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>系统设置</span></span>}>
                    <Menu.Item key="5">删除用户</Menu.Item>
                    <Menu.Item key="6">添加管理用户</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default withRouter(MenuComponent);
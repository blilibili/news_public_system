import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Router, Route, Link } from 'react-router-dom'
import 'antd/lib/button/style/css';
import '../../assets/header.css'

class HeaderCommon extends Component{
    render(){
        return(
            <div>
                <div className="header-title">
                    <div className="header-left">
                        LOGO
                    </div>
                    <div className="header-right">
                        <Row>
                            <Col className="gutter-row" span={6}>
                                <Link style={{color: 'rgba(0, 0, 0, 0.65)'}} to="/"><div className="gutter-box">首页</div></Link>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <Link style={{color: 'rgba(0, 0, 0, 0.65)'}} to="/news"><div className="gutter-box">新闻列表</div></Link>
                            </Col>
                            <Col style={{float:"right"}} className="gutter-row" span={6}>
                                <Link style={{color: 'rgba(0, 0, 0, 0.65)'}} to="/login"><div className="gutter-box">登录/注册</div></Link>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderCommon;
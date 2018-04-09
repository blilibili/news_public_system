import React, { Component } from 'react';
import {requestGetAllNews} from '../../api/news/get/getAllNews'
import MenuComponent from '../common/menu'
class AllNews extends Component{
    constructor(props) {
        super(props);
        this.state = { newsData: [] };
        requestGetAllNews({}).then((res) => {
            // 设置 initial state
            this.setState({newsData: res.data.data});
        })
    }
    render(){
        return (
            <div>
                <MenuComponent />
                <div style={{width:'85%' , float:'right' , padding:'20px'}}>
                    {console.log(this.state)}
                </div>
            </div>
        )
    }
}

export default AllNews;
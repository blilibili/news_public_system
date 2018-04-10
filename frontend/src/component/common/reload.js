import React, { Component } from 'react';

class Reload extends Component{
    constructor(props){
        super(props);
        this.props.history.push(window.localStorage.getItem('route'));
    }
    render(){
        return(
            <div>
                路由跳转页面
            </div>
        )
    }
}

export default Reload;
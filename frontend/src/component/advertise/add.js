import React, { Component } from 'react';
import MenuComponent from '../common/menu'
class AddAdvertise extends Component{
    render(){
        return (
            <div>
                <MenuComponent />
                <div style={{width:'85%' , float:'right' , padding:'20px'}}>
                    新增Banner广告
                </div>
            </div>
        )
    }
}

export default AddAdvertise;
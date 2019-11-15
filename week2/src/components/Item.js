/*
 * @Author: your name
 * @Date: 2019-11-14 08:47:16
 * @LastEditTime: 2019-11-14 11:18:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \week2\src\components\Item.js
 */
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
class Item extends Component {
    render() {
        console.log(this.props)
        let {id, img, nm, showInfo, star, globalReleased } = this.props
        return (
            <div className='item'>
                <div className='left'><img src={img.replace('w.h', '128.180')} /></div>
                <div className='mid'>
        <span>{nm}</span>
                    <span>观众评9.1</span>
                    <span>{star}</span>
                    <span>{showInfo}</span>
                </div>
                <div className='right'>
                    <button onClick={this.toDetail.bind(null,id)} className={globalReleased ? '' : 'pre'}>{
                        globalReleased ? '购票' : '预售'
                    }</button>
                </div>
            </div>
        );
    }
    toDetail=(id)=>{
        this.props.history.push(`/mydetail/${id}`)
    }
}

export default withRouter(Item);
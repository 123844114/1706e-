/*
 * @Author: your name
 * @Date: 2019-11-11 16:41:46
 * @LastEditTime: 2019-11-13 11:21:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \week2\src\components\home\Item.js
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
class Item extends Component {
    render() {
        let { user, vote, content,commentId ,isZan,zanFn} = this.props
        return (
            <div className='item'>
                <p><span className='name'>{user.nickname}:</span>    <span onClick={()=>{zanFn(commentId)}} className={isZan?'red':''}>赞{vote}</span></p>
        <p className='content'>{content}</p>
        <button onClick={()=>{
            this.props.history.push('/a')
        }}>回复</button>
            </div>
        );
    }

}

export default connect(null,(dispatch)=>{
    return {
        zanFn:(id)=>{
            dispatch({type:'ZAN',id})
        } 
    }
})(withRouter(Item));
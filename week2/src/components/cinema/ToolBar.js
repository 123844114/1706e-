/*
 * @Author: your name
 * @Date: 2019-11-14 12:00:21
 * @LastEditTime: 2019-11-14 15:42:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \week2\src\components\cinema\ToolBar.js
 * 功能条
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import City from '../dialog/City'
class ToolBar extends Component {
    state = {
        currentIndex: null,
        tabbar: [{
            name: '全城'
        },
        {
            name: '万达影城'
        },
        {
            name: '特色'
        }]
    }
    render() {
        let { tabbar, currentIndex } = this.state
        return (
            <div className='toolbar'>
                {
                    tabbar.map((item, index) => <span key={index} className={currentIndex === index ? 'active' : ''} onClick={this.changeTab.bind(null, index)}>{item.name}</span>)
                }
            </div>
        );
    }
    /**
     * 点击span tab切换
     * 高亮
     * 设置dialogOption
     */
    changeTab = (index) => {
        this.setState({
            currentIndex: index
        })
        this.props.setDialogOption({
            visible:true,
            com:City
        })
    }
}

export default connect(null, (dispatch) => {
    return {
        setDialogOption: (opt) => { //函数
            dispatch({type:'SET_DIALOG_OPTION',opt})
        }
    }
})(ToolBar)
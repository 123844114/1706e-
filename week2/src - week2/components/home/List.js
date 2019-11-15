/*
 * @Author: your name
 * @Date: 2019-11-12 10:37:59
 * @LastEditTime: 2019-11-12 16:33:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \week2\src\components\home\List.js
 */
import React, { Component } from 'react';
import Item from './Item'
import axios from 'axios'
import { connect } from 'react-redux'
class List extends Component {
    state = {
        // data: {},   //数据
        keyword: ''  //关键字
    }
    render() {
        let { keyword } = this.state
        let { list } = this.props
        return (
            <div className='list'>
                {list.commentIds && list.commentIds.map((v, i) => <Item key={i} {...list.comments[v]} />)}
            </div>
        );
    }
    componentDidMount() {
        //调接口，赋值
        // axios.get('/list').then(({ data }) => {
        //     // this.setState({ data })
        //     this.props.setList(data)
        // })
        this.props.setList()
    }
}

export default connect((state) => {
    return {
        list: state.list
    }
}, (dispatch) => { //假的
    return {
        // setList: (list) => {
        //     dispatch({ type: 'SET_LIST', list })
        // }
        setList: () => {
            //调接口
            dispatch((dis) => {
                axios.get('/list').then(({ data }) => {
                    dis({ type: 'SET_LIST',list:data })
                })
            })
        }
    }
})(List);
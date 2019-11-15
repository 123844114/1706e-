/*
 * @Author: your name
 * @Date: 2019-11-13 16:10:27
 * @LastEditTime: 2019-11-14 15:14:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editci
 * @FilePath: \week2\src\views\home\Cinema.js
 */
import React, { Component } from 'react';
import Axios from 'axios';
import Dialog from '../../components/Dialog'
import Top from '../../components/cinema/Top'
import ToolBar from '../../components/cinema/ToolBar'
import List from '../../components/cinema/List'
import {connect} from 'react-redux'
class Cinema extends Component {
    state={
        dialogOption:{
            visible:false,
            com:""
        }
    }
    render() {
        let {dialogOption}=this.state
        return (
            <>
            <div className='cinema'>
                <Top/>
                <ToolBar/>
                <List/>
            </div>
            <Dialog dialogOption={dialogOption}/>
            </>
        );
    }
    componentDidMount(){
        Axios.get('/filter?ci=57').then(({data})=>{
            // this.setState({data})
            this.props.setfiltercinema(data)
        })
    }
}

export default connect(null,(dispatch)=>{
    return {
        setfiltercinema:(data)=>{
            dispatch({type:'SET_FILTER_CINEMAS',data})
        }
    }
})(Cinema) ;
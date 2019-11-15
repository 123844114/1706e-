/*
 * @Author: your name
 * @Date: 2019-11-13 15:52:24
 * @LastEditTime: 2019-11-14 11:18:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editet
 * @FilePath: \week2\src\views\Detail.js
 */
import React, { Component } from 'react';
import Axios from 'axios';

class Detail extends Component {
    render() {
        return (
            <div>
                detail
            </div>
        );
    }
    componentDidMount(){
        console.log(123)
        let id=this.props.match.params.id
        Axios.get('/detail?movieId='+id).then(({data})=>{
            console.log(data)
        })
    }
}

export default Detail;
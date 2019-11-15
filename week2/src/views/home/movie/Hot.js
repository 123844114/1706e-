/*
 * @Author: your name
 * @Date: 2019-11-13 15:48:47
 * @LastEditTime: 2019-11-14 10:50:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \week2\src\views\home\movie\Ing.js
 */
import React, { Component } from 'react';
import Item from '../../../components/Item'
import Axios from 'axios';
class Hot extends Component {
    state={
        movieList:[]
    }
    render() {
        let {movieList} = this.state
        return (
            <div className='hot'>
                {
                    movieList.map(item=><Item {...item} key={item.id}/>)
                }
            </div>
        );
    }
    componentDidMount() {
        Axios.get('/hot').then(({ data }) => {
            this.setState({
                movieList:data.movieList
            })
        })
    }
}

export default Hot;
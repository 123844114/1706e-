/*
 * @Author: your name
 * @Date: 2019-11-14 11:35:04
 * @LastEditTime: 2019-11-14 15:04:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \week2\src\components\Dialog.js
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'
class Dialog extends Component {
    render() {
       
        let { dialogOption } = this.props
        console.log(dialogOption)
        return (
            <>
                {
                    dialogOption.visible && (
                        <div className='dialog'>
                            <dialogOption.com/>
                        </div>
                    )
                }
            </>
        );
    }
}

export default connect((state)=>{
    return {
        dialogOption:state.dialogOption
    }
})(Dialog);
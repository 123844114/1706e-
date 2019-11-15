/*
 * @Author: your name
 * @Date: 2019-11-01 16:08:51
 * @LastEditTime: 2019-11-01 16:29:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demovue\src\moke.js
 */
import Mock from 'mockjs'
Mock.mock('/list', 'get', {
    'list|3-5': [
        {
            'string|3': 'string',
            'number|3': 1,
            'boolean|3': false,
            'undefined|3': undefined,
            'null|3': null,
            'object|3': { object1: 'object1', object2: 'object2', object3: 'object3' },
            'array|3': ['array1', 'array2']
        }
    ]
})
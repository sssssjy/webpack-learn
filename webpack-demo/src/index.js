/*
 * @Author: your name
 * @Date: 2020-12-03 16:11:01
 * @LastEditTime: 2020-12-04 10:01:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-learn\webpack-demo\src\index.js
 */
import _ from 'lodash';
import numRef from './ref.json';

export function numToWord(num) {
    return _.reduce(numRef,(accum,ref) => {
        return ref.num === num ? ref.word : accum;
    }, '');
}

export function wordToNum(word) {
    return _.reduce(numRef,(accum, ref) => {
        return ref.word === word && word.toLowerCase() ? ref.num : accum
    }, -1);
}
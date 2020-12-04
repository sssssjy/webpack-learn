/*
 * @Author: your name
 * @Date: 2020-12-03 16:11:01
 * @LastEditTime: 2020-12-04 09:46:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-learn\webpack-demo\src\index.js
 */
async function getComponent() {
    const element = document.createElement('div');
    const {default:_} = await import('lodash');
    element.innerHTML = _.join(['hello','webpack'], ' ');
    return element;
}

getComponent().then((component) => {
    document.body.appendChild(component);
})
/*
 * @Author: your name
 * @Date: 2020-12-03 16:11:01
 * @LastEditTime: 2020-12-03 17:02:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-learn\webpack-demo\src\index.js
 */
async function getComponent() {
    const element = document.createElement('div');
    const {default:_} = await import('lodash');
    const Prefetch = await import(/* webpackPrefetch: true */ './importComponent');
    console.log(Prefetch);
    element.innerHTML = _.join(['hello','webpack'], ' ');
    return element;
}

getComponent().then((component) => {
    document.body.appendChild(component);
})
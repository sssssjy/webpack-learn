/*
 * @Author: your name
 * @Date: 2020-12-02 17:27:35
 * @LastEditTime: 2020-12-04 16:53:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \document\webpack-demo\src\index.js
 */
import _ from 'lodash';
import printMe from './print'

if ('serviceWorker' in navigator) {
    window.addEventListener('load',() => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('sw registered',registration);
        }).catch(registrationError => {
            console.log('sw registration failed:',registrationError);
        })
    })
}else{
    console.log('serviceWorker is not exit');
}

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    btn.innerHTML = 'click me and check the console';
    btn.onclick = printMe;
    element.appendChild(btn);
    // element.innerHTML = _.join(['hello','webpack','中文测试'],' ');
    // element.innerHTML = 'hello, webpack';
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());
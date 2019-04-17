import Vue from 'vue'

let a = null

export function add (fn) {
    a = fn
}

export function call() {
    console.log(a)
}


// new Vue({
//     el: '#app',
//     // router,
//     // render: h => h(App)
// })
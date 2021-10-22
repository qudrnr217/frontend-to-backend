'use strict'

//async : syntactic(어법적인) sugar for promise - Promise를 문법적으로 쓰기 쉽게 만든것

// c언어로 예를들면
// int k = 0;
// if(k>1){
//     k=3
// }
// else{
//     k=0
// }

// //syntatic sugar
// (k>1) ? 3:0

// function fetchUser(){
//     return new Promise((resolve, reject)=>{
//         console.log('promise 실행')
//         resolve('실행끝')
//     })
    
// }

// const a = fetchUser()

// a.then((v)=>{
//     console.log(`fetchUser result: ${v}`)
// })


//syntactoc sugar 위에 코드를 
async function fetchUser(){ //async만 붙이면 promise를 반환함. return은 resolve 역할
    console.log('promise 실행') //원래 실행해야하는 부분
    return '실행끝'  //resovle에 해당하는 부분 
    
}


//--아래는 변하지않음.
const a = fetchUser()

a.then((v)=>{
    console.log(`fetchUser result: ${v}`)
})
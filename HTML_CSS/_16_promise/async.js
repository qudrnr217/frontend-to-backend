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

function B(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('B가 실행됨')
            resolve(45)
        },3000)
    })
}

//syntactoc sugar 위에 코드를 
async function fetchUser(a){ //async만 붙이면 promise를 반환함. return은 resolve 역할
    console.log('promise 실행') //원래 실행해야하는 부분
    // return '실행끝'  //resovle에 해당하는 부분 
    
    const k = await B() //await는 async 함수 내에서만 , 다른 promise의 종료를 기다릴 때 사용

    if (k>=0){
        return '실험끝' //resolve
    }
    else{
        throw new Error('음수') //reject
    }
    
    
}


//--아래는 변하지않음.
const a = fetchUser(-1)

a.then((v)=>{
    console.log(`fetchUser result: ${v}`)
})
.catch((error)=>{
    console.log(`에러발생 ${error}`)
})
.finally(()=>{
    //resolve, reject에 상관없이 promise가 종료되면서 공통적으로
    //실행되야하는 부분
    console.log(`promise 끝 from finally`)
})
'use strict'

//javascript --> typescript 자바스크립트의 변수의 타입을 정해줌.
let request = new XMLHttpRequest()
request.open('GET','http://127.0.0.1:5500/frontend-to-backend/HTML_CSS/_1_hello_world/hello.html',false) 
//http://127.0.0.1:5500/HTML_CSS/_1_hello_world/hello.html
//local loop=127.0.0.1 자신에게 보내는 주소 ,5500은 포트넘버

request.send(null)

//차례대로 수행되서 콘솔창에 출력이된다. 하지만 위에서 XMLRequest에서 받을
//자료가많으면 오래걸리고 밑에 for문이 출력된다.
//이때 동시에 돌리는 방식을 써야함. 그것이 Asynchronous방식인 비동기 방식을 사용하여
//서로 각각 돌아가게 만들면된다.

// js ---> promise(일을 시키고 일이 끝나고나면 끝난 시점에 자동으로 지정한 일을 하게해줌.)
const a = new Promise((resolve, reject)=>{ //reject는 실패했을 때 호출됨
    //해야할 일
    console.log('hello')
    setTimeout(()=>{
        resolve('ended')
    },3000)
    // resolve('ended') //hello를 출력하고 resolve함수를 호출
})

a.then((v)=>{ //v=ended
    console.log(`then received: ${v}`)
})

for (let i=0;i<10;i++){
    console.log(i)
}
// 3초를 기다리지 않고 for문이 출력되고 3초후에 a.then이 실행된다. 
// 즉 비동기식으로 promise를 사용하여 할 수 있다.
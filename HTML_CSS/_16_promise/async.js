'use strict'

//javascript --> typescript 자바스크립트의 변수의 타입을 정해줌.

//동기식 --> 코드가 위에서 아래로 수행되고, 결과도 그 순서대로 출력
// let request = new XMLHttpRequest()
// request.open('GET','http://127.0.0.1:5500/frontend-to-backend/HTML_CSS/_1_hello_world/hello.html',false) 
// //local loop=127.0.0.1 자신에게 보내는 주소 ,5500은 포트넘버
// request.send(null)

// if (request.status===200){
//     //200은 서버로 부터 제대로 받았고 제대로 보내주겠다라는 뜻
//     console.log(request.responseText)
// }


// for (let i=0;i<10;i++){
//     console.log(i)
// }

//비동기식 ---> 코드의 순서와 상관없이 진행.
//promise없이 비동기식

//1.만들고
let request = new XMLHttpRequest()

//서버로 부터 응답이왔을때 실행될 코드를 지정, 핸들러, 이벤트 핸들러를 지정해서
//4.응답처리
//reqeust.onload : 요청에 대한 응답이 로딩될 때
request.onload = ()=>{
    if (request.status===200){
        console.log('응답이 제대로 왔음')
        console.log(request.responseText)
    }
    else{
        console.log('응답이 제대로 오지 않았음')
    }
}

//2.요청을 보내고
request.open('GET','http://127.0.0.1:5500/frontend-to-backend/HTML_CSS/_1_hello_world/hello.html',true) //false = 동기식, true =비동기식
request.send(null)

//3.
for (let i=0;i<10;i++){
    console.log(i)
}

'use strict'

//javascript --> typescript 자바스크립트의 변수의 타입을 정해줌.
let request = new XMLHttpRequest()
request.open('GET','http://127.0.0.1:5500/HTML_CSS/_1_hello_world/hello.html',false) 
//local loop=127.0.0.1 자신에게 보내는 주소 ,5500은 포트넘버
request.send(null)

if (request.status===200){
    //200은 서버로 부터 제대로 받았고 제대로 보내주겠다라는 뜻
    console.log(request.responseText)
}


for (let i=0;i<10;i++){
    console.log(i)
}

//차례대로 수행되서 콘솔창에 출력이된다. 하지만 위에서 XMLRequest에서 받을
//자료가많으면 오래걸리고 밑에 for문이 출력된다.
//이때 동시에 돌리는 방식을 써야함. 그것이 Asynchronous방식인 비동기 방식을 사용하여
//서로 각각 돌아가게 만들면된다.
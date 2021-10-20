'use strict'


//promise를 이용한 비동기 서버 요청
//XMLHttpRequest : event Handler ---> 비동기 처리
//Promise : fetch ---> promise

//fetch : 가져오다, 서버로부터 web page를 가져오다.
//a는 promise
const a = fetch('http://127.0.0.1:5500/frontend-to-backend/HTML_CSS/_1_hello_world/hello.html') //반환값이 promise
//fetch가 웹서버에서 요청해서 제대로 불러오면 resolve를 아니면 reject를 호출
a//promise
.then((response)=>{ //fetch가 성공하여 서버로부터 응답이 제대로 왔을 때 실행
    console.log(`서버응답 도착`)
    // console.log(`응답을 텍스트로 바꾸면: ${response.text()}`) //반환값이 문자열이 아님! promise임
    return response.text() // 또 다른 promise를 반환
})
.then((data)=>{ //retrun된 response.text()가 data로 들어온다.
    console.log(`문자열로 바꾼 응답: ${data}`)
})
.catch((err)=>{
    console.log(`서버응답 에러: ${err}`)
})

//for문을 넣는 이유 : 비동기 요청과 상관없는 부분이 별도로 실행되는지 확인하기 위해서
for (let i=0;i<10;i++){
    console.log(i)
}

// HTML, CSS, JS -> front-end 고객들이 보는 부분.
//web server - java - spring framework, ASP.NET - c# (windows 기반) -> back-end
//js : chrome(v8 engine) -> js 코드를 machine code로 바꿔줌. 웹브라우저에서만 돌아가는게 아쉬움.
//그래서 v8엔진만 꺼내서 하나의 프로그램처럼 만듬. 브라우저 환경이 아닌 하나의 프로그램으로
//JS를 돌릴 수 있는 환경을 만들어줌. 그것이 node.js 웹브라우저 환경이 아닌곳에서 자바스크립트로 짠 것을
//돌릴 수 있게해줌.
//따라서 front-end 엔지니어들이 back-end 까지 개발하게 됐음. 
//둘다 할 주 알게된 엔지니어들이 full stack 엔지니어들임.

const { showLogMessage } = require('./logger.js')


//함수
// function sayHello(name){
//     console.log("hello "+name)
// }

// sayHello("John")
// sayHello('alice')

// const v =10
// if (v > 5){
//     console.log("It is a big number")
// }
// else{
//     console.log('작은 숫자야')
// }

//3초에 한번씩 주기적으로 
// setInterval(()=>{
//     console.log('node js 연습중입니다...')
// },3000)

// setTimeout(() => {
//    console.log('타임아웃 한번만') 
// }, 3000);


//Module - 함수들의 집합 libarary 라고 생각하면됨. 남들이 짠 코드

//logger.js 모듈을 불러온다.
const logger = require('./logger.js')
logger.showLogMessage('첫 번째 로그 메시지')
logger.secondLog('두 번째 로그 메시지')
console.log('logger 모듈에 들어있는 값은: '+logger.pvalue)
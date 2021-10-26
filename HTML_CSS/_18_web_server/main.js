// nps init -y하면 생성됨.
// npm install express --save  -> express 모듈을 사용
const express =require('express') //npm install express --save
const app = express()

//pages경로로 들어오는 요청에대해서는
//local 폴더 __dirname : main.js 가 있는 위치
//__dirname + '/pages'
//ex) working.html에서 script에 있는 js파일을 불러올 때 사용. 만약 use를 사용하지 않는다면
//오류가 생기게됨.
app.use('/script',express.static(__dirname+'/script')) 


app.listen(3000,()=>{
    console.log('3000번에 귀를 대고 듣기 시작했음')
}) //서버가 만들어짐, 3000은 포트번호임

//처리해주는 루틴들을 추가
app.get('/',(req,res)=>{ //req: 웹브라우저부터 오는것 , res:웹브라우저로 나가는것.
    console.log('==>루트에 대한 요청 들어왔음')
    //res.send('루트에 대한 요청')
    res.sendFile(__dirname+'/pages/index.html') //dirname(_18_web_server) : 현재디렉토리
}) //루트, 목적지 구조를 폴더식으로 씀.


app.get('/about',(req,res)=>{
    console.log('==>about에 대한 요청 들어왔음')
    // res.send('res에 대한 요청')
    res.sendFile(__dirname+'/pages/about.html')
})

app.get('/working',(req,res)=>{
    console.log('==>working에 대한 요청 들어왔음')
    // res.send('res에 대한 요청')
    res.sendFile(__dirname+'/pages/working.html')
})

//npm install -g nodemon이라는 프로그램을 실행시키면 코드를 바꾸면 다시 시작하지
//않아도 그대로 적용되어 실행됨.
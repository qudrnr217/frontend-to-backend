
function showLogMessage(msg){
    console.log(`------------------------`)
    console.log(`로그 메시지는 ${msg}`)
    console.log(`------------------------`)
}

function showLogMessage2(msg){
    console.log(`==========================`)
    console.log(`로그 메시지는2 ${msg}`)
    console.log(`==========================`)
}

const precious_value = 78

//module로 만드는 방법
module.exports.showLogMessage = showLogMessage
module.exports.secondLog = showLogMessage2
module.exports.pvalue = precious_value
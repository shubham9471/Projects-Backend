function log(message){
    console.log(message)
}


function anotherlog(message){
    console.log(message)
}

const url = "http://myloggingsystem.com/log"


module.exports.loger_one = log

module.exports.loger_two = anotherlog

module.exports.loger_url = url
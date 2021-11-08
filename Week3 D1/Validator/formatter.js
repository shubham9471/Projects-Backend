function triming(message){
    let curr = message
    console.log(curr.trim())

}

function lower(message){
    let low = message
    console.log(low.toLowerCase())
}

function upper(message){
    let hi = message
    console.log(hi.toUpperCase())

}


module.exports.trimed = triming

module.exports.Lower = lower

module.exports.Upper = upper
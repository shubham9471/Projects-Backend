
const obj = require('./logger')

const ob = require('./util/helper')

const format = require('../validator/formatter')



function mainfunction(){
    console.log("this is my Main Function")
}
console.log("---------------------------------------------------------------------------")
obj.loger_one("My Name is Shubham")

obj.loger_two("Welecome to My Application, I am a part of the functionup team ")

console.log("The url will help you:  " +  obj.loger_url)

console.log("---------------------------------------------------------------------------")

ob.Dateoftoday()

ob.Month("Month is : November")

ob.BatchInfo("Current Batch , Week , Topic Stared :-> Radium Batch ,  Week 3 ,  Kickedoff with NodeJs")

console.log("---------------------------------------------------------------------------")

format.trimed("   FunctionUp Team Delhi")

format.Lower("CODE IT ALL")

format.Upper("never giveup")


const _ = require('lodash');

// const obj1 = require('chunk')

let str = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept","Oct", "Nov","Dec"]


console.log(_.chunk(str, [size=4]))


let array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]


console.log(_.tail(array))


console.log("---------------------------------------------------------------------------")

// let arr1 = [1, 2]

// let arr2 = [2, 3]

// let arr3 = [3, 4]

// let arr4 = [4, 5]

// let arr5 = [5]

console.log(_.union([1, 2], [2, 3], [3, 4], [4, 5], [5, 6]))

console.log("---------------------------------------------------------------------------")

console.log(_.fromPairs([['a', 1], ['b', 2]]));















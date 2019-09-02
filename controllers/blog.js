const express = require('express')

let helloWorldFunction = (req,res)=>{res.send('hello world from routes.js')}
let printExample = (req,res)=>{res.send('print example')}

module.exports={

    helloWorld:helloWorldFunction,
    printExample:printExample
}
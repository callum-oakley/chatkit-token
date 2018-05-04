#! /bin/node

const { default: Chatkit } = require('@pusher/chatkit-server')
const config = require('./config.js')

const last = x => x[x.length - 1]
const chatkit = new Chatkit(config)
const options = JSON.parse(last(process.argv))

console.log(chatkit.generateAccessToken(options).token)

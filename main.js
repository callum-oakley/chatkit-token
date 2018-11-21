#! /usr/bin/env node

const { default: Chatkit } = require("@pusher/chatkit-server")
const JSON5 = require("json5")

const config = require("./config.js")

const envOpt = process.argv[process.argv.length - 2]
const environment =
  envOpt === "production"
    ? "production"
    : envOpt === "staging"
      ? "staging"
      : "development"

const chatkit = new Chatkit(config[environment])
const options = JSON5.parse(process.argv[process.argv.length - 1])

console.log(chatkit.generateAccessToken(options).token)

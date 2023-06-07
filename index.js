'use strict'
require('dotenv').config();
const port=process.env.PORT || 3002
const server=require("./src/server")
server.start(port)




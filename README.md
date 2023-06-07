# basic-express-server
I build a new server in this repo.This server start running from the ***index.js*** file and it's importing all of it's files from the ***src*** folder which consists of ***middlewares and handlers(Controllers)*** which containes the handlers and middlewares functions this i separate my project into moduls to organize and ease the work.  
In middlewares i create a ***logger.js*** which is log the ***path(route or endpoint)*** of the routing procces and the ***HTTP method (GET , POST , DELETE ...etc)*** that we used to hit the route.  
Also,i create a ***validator.js*** which is check if the value of the query that has been hit is a valid value or not and handle the req if the if the value is invalid value.  
In the End i bulid a folder to do a ***test*** in my server and check if there is an error or not and try to fix it it there is an any error.

[PuLL-Requsets-Link](https://github.com/MalekHasan/basic-express-server/pulls)
[Deployed-Link](https://basic-express-server-zs3v.onrender.com)

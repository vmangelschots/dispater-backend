/// <reference path="../typings/main.d.ts" />
import * as express from "express";
import * as cors from "cors";
import * as passport from "passport";
import {Strategy} from "passport-local";

var app = express()

var port: number = process.env.port || 8080

app.get('/',function(req,res){
    res.send('hello world!');    
})

passport.use(new Strategy{
    function(username,password,done){
        return done(null,user);
    }
})

app.post('/login',function(req,res){
    
})

app.listen(port, () => {
    console.log(`Server started at port https://localhost:${port}`);
})
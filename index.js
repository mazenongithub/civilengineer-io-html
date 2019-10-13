var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var app = express();
var session = require('express-session')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const keys = require('./keys');
app.use(session({ secret:'some string', cookie: { maxAge: 1000 * 60 * 60 * 30 } }));

app.get('/',(req,res)=>{
    res.send({response:"Hello New App"})
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}
if (process.env.NODE_ENV === 'production') {
app.listen(process.env.PORT);
} else {
    app.listen(3000)   
}
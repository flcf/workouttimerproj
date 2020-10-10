
const express = require('express');
//call the API like so! Bc it's just a module
const bodyParser = require('body-parser') ;//parses information sent over so it can be read by express

const app = express();
const port = 5000;

const userDatabase = {

    users: [
        {
            id: '123',
            username: 'jinnie',
            email: 'seokjinnies@gmail.com',
            password: 'password123'

        },
        {
            id: '124',
            username: 'sugabuns',
            email: 'muchsugar@gmail.com',
            password: 'august123'

        }

    ]

}

//this is a piece of middleware

//sent hello world to appear on the server

app.get('/', function(req, res){
    res.json(userDatabase);

});

app.listen(port, () => {
    //will run after the listen function!
    console.log(` listening at http://localhost:${port}`)
})


//root   = this is working
//signin --> POST = success/fail -- posting user information //send it in the body!!!
//register --> POST = success/fail

//Workout Details --> Get data from back end of the user's information !




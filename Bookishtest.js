const express = require("express");
const passport = require("passport");
const passportJwt = require("passport-jwt");
const jwt = require("jsonwebtoken");
const app = express();
const pgp = require('pg-promise')();
const password = require('./config');

const db = pgp(`postgres://postgres:${password}@localhost:5432/postgres`);

class Bookdata{
    constructor(id, name, isbn, barCode, authorId){
        this.id = id
        this.name = name
        this.isbn = isbn
        this.barCode = barCode
        this.authorId = authorId
    }
}

app.get("/books", (req, res)=>{
    db.any("SELECT * FROM BOOK")
    .then((data) => {
        const books = [];
        for(let i = 0; i < data.length ; i++){
            const id = data[i].id;
            const name = data[i].name;
            const isbn = data[i].isbn;
            const barCode = data[i].barcode;
            const authorId = data[i].authorId;

            books.push(new Bookdata(id, name, isbn, barCode, authorId));
        }
        res.send(books);
    })
    .catch(function(error){
        console.error(error);
    });
});

app.get("/login", (req, res) => {
    db.any("SELECT * FROM ACCOUNT")
    .then((data) => {
        const name = request.query.name;
        const password = request.query.password;

            for (let i = 0 ; i < data.length ; i++){
                if (name === true && password === true){
                    res.send({
                        message: `Hello ${name}!`,
                        token: createTokenForUser(user)
                    });
                }
                else{
                    res.status(400).send({
                        errors: "Wrong username and password entered"
                    });
                }
            }
    })
}
)

app.listen(3000, () => {
    console.log("Bookish is on port 3000 :)");
});

function createTokenForUser(name){
    return jwt.sign({name: name}, secret);
}

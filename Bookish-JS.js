const express = require("express");
const passport = require("passport");
const passportJwt = require("passport jwt");
const jwt = require("jsonwebtoken");


const secret = "this is a sccret key hehe :D"
configurePassport();

const app = express();

app.use(passport.initialize());

app.get("login", (req, res) => {
    const username = request.query.username;
    const password = request.query.password;
    if (username === true && password === true){
        res.send({
            message: `Hello ${username}!`,
            token: createTokenForUser(user)
        });
    }
    else{
        res.status(400).send({
            errors: "Wrong username and password entered"
        });
    }
}
)

app.get("/books",passport.authenticate("jwt", { session: false }), (req, res) => {
    return [];
});

app.listen(3000, () => {
    console.log("Bookish is on port 3000");

});

function configurePassport(){
    const jwtOptions = {
        jwtFromRequest: passport.Jwt.ExtractJwt.fromHeader("x-access-token"),
        secretOrKey: secret,
    }

    passport.use(new passportJwt.Strategy(jwtOptions, (decodedJwt, next) => {

    }))
}

function createTokenForUser(username){
    return jwt.sign({username: username}, secret);
}
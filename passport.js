const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const UserService = require("./services/userServices");
const UserInstance = new UserService();

passport.use( 
    new LocalStrategy({
        usernameField: "name",
        passwordField: "password"
}, async (username, password, cb) => {
    console.log(username, password);
    const userData = await this.UserInstance.getByName(username);
    constole.log(userData);

})
);


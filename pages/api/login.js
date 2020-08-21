import {withIronSession} from "next-iron-session";
import User from "../../src/user";

async function handler(req, res) {
    const {email, password} = req.body;
    User.login({email: email, password: password})
        .then(result => {

        })
        .then(err => {
            
        })
    // get user from database then:
    req.session.set("user", {
        id: 230,
        admin: true,
    });
    await req.session.save();
    res.send("Logged in");
}

export default withIronSession(handler, {
    password: "complex_password_at_least_32_characters_long",
    // if your localhost is served on http:// then disable the secure flag
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
});
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const express = require("express")
const routes = express.Router()


require("../db/conn")
const User = require("../model/userSchema")
routes.get("/", (req, res) => {
    res.send("Hello World from server from auth file")
});

// using promises
// routes.post("/register" , (req,res) => {

//     //taking user data
//     //its name should map with the attributes name
//     const {name, email, phone, work, password, confirmPassword} = req.body;

//     //validation
//     if(!name || !email || !phone || !work || !password || !confirmPassword){
//         return res.status(422).json({error: "Please fill all the required fields"})
//     }

//     User.findOne({email: email})
//     .then((userExist) => {
//         if(userExist){
//             return res.status(422).json({error: "Email Already exist"})
//         }
//         // user data in this variable
//         const user = new User({name, email, phone, work, password, confirmPassword})
//         user.save()
//         .then(() => {
//             res.status(201).json({message: "User Registered Successfully"}) // 201: data save
//         })
//         .catch((err) => res.status(500).json({message: "Registration Fail"})) // 500: database error
//     }).catch(err => {console.log(err)})
// })


//using async/await
routes.post("/register", async (req, res) => {

    //taking user data
    //its name should map with the attributes name
    const { name, email, phone, work, password, confirmPassword } = req.body;

    //validation
    if (!name || !email || !phone || !work || !password || !confirmPassword) {
        return res.status(422).json({ error: "Please fill all the required fields" })
    }
    try {
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({ error: "Email Already exist" })
        } else if (password != confirmPassword) {
            return res.status(422).json({ error: "Password and Confirm password should match" })
        } else {
            const user = new User({ name, email, phone, work, password, confirmPassword })
            //password hashing functions here , before saving
            await user.save()
            res.status(201).json({ message: "User Registered Successfully" }) // 201: data save
        }
    }
    catch (err) {
        console.log(err)
    }
})

// login route

routes.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Please fill all the required fields" })
        }
        const userLogin = await User.findOne({ email: email })
        if (userLogin) {
            const isPassMatched = await bcryptjs.compare(password, userLogin.password)
            if (isPassMatched) {
                res.status(201).json({ message: "User Login Successfully" })
                const token = await userLogin.generateAuthToken();
                // console.log(token)
                res.cookie("tokenCookie", token , {
                    expires: new Date(Date.now() + 2592000000),// expires in 30 days
                    httpOnly: true
                })
            } else {
                res.status(400).json({ message: "Provide Correct Credentials" })
            }
        }else{
            res.status(400).json({ message:"Provide Correct Credentials" })
        }

    }
    catch (err) {
        console.log(err)
    }
})


module.exports = routes;
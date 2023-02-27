const mongoose = require("mongoose")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    work: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            },
        }
    ]

})

//hashing password
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcryptjs.hash(this.password, 12) //hash of password in 12 length
        this.confirmPassword = await bcryptjs.hash(this.confirmPassword, 12)
    }
    next();
})

//generating token here 
userSchema.methods.generateAuthToken = async function () {
    try {
        let generateToken = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token: generateToken})
        const generatedToken = await this.save()
        return generatedToken
    } catch (err) {

    }
}

const User = mongoose.model("User", userSchema);
module.exports = User;

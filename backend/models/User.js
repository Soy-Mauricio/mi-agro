const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema(
    {
        name: {
            type: String,
        },
        lastname: {
            type: String,
        },
        document: {
            type: String,
        },
        cellphone: {
            type: String,
        },
        email: {
            type: String,
        },
        password: {
            type: Number,
        },
    },
    {
        collection: "users",
    }
);

module.exports = mongoose.model("User", userSchema);





import { Schema, model } from "mongoose";

const jokeSchema = new Schema({
    setup: {
        type: String,
        required: true
    },
    punchline: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})


export default model('Joke', jokeSchema)


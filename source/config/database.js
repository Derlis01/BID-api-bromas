import {mongoose, connect } from "mongoose";

mongoose.set('strictQuery', false);

async function conectarDB() {
    try {
        let db = await connect('mongodb://127.0.0.1:27017/api-jokes')
        console.log('DB connected to: ' + db.connection.name)
    } catch (err) {
        console.error('No se puedo conectar con la DB' + err)
    }
}

conectarDB()
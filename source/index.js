import express from "express";
const port = 3000;
const app = express();
import routes from "./routes/index.routes.js";
import './config/database.js'


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use( routes );


app.listen(port);
console.log(`Server on port ${port}`);

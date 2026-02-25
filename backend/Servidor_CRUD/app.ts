import express from "express";
import clientsRouter from "./router/clients.js";
import usersRouter from "./router/users.js";
import db from "./db.js";


const app = express();

app.use(express.urlencoded({extended: true}));
app.use(clientsRouter);
app.use(usersRouter);
app.set('view engine', 'pug');
app.set('views', './views');

db.sync().then(() =>{
    console.log("Conectado com o DB "+process.env.DB_NAME);
}).then(() =>{
    app.listen(process.env.PORT, () =>{
    console.log("Servidor criado...")
    })
});




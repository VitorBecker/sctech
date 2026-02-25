import {Request,Response} from "express";
import {IUsers} from "../model/users.js";
import usersModel from "../model/usersModel.js";
// import pkg from 'sequelize';
// const { Op } = pkg;


function login (req: Request, res: Response, next: any){
    res.render("login");
}


async function checkLogin (req: Request, res: Response, next: any){
    const login = req.body as IUsers;

    let logado = await usersModel.findOne({
        where: {
            user: login.user,
            password: login.password,
        }
    });

    if(logado != null){
        //OK
        res.redirect("/clients");
    }
    else{
        //NOT OK
        console.log("Senha Inválida.");
    }
}


export default {login,checkLogin};
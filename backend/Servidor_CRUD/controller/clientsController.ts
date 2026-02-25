import {Request,Response} from "express";
import {IClients} from "../model/clients.js";
import clientsModel from "../model/clientsModel.js";
import pkg from 'sequelize';
const { Op } = pkg;


async function index (req: Request, res: Response, next: any){
    //res.render('index')
    const clients = await clientsModel.findAll();
    res.json(clients)
}

async function show (req: Request, res: Response, next: any){
    const client = await clientsModel.findByPk(req.params.id as string);
    res.json(client)
}

function create (req: Request, res: Response, next: any){
    // res.send('create')
    res.render('create')
}

async function store (req: Request, res: Response, next: any){
    let client = req.body as IClients;
    await clientsModel.create({...client});
    res.redirect('/');
}


async function edit (req: Request, res: Response, next: any){
    const client = await clientsModel.findByPk(req.params.id as string);
    res.render("edit", {client: client});
}

async function update (req: Request, res: Response, next: any){
    await clientsModel.update(
        req.body as IClients, {
            where: {
                id: req.params.id
            }
        }
    );
    res.redirect('/'); 
}

async function del (req: Request, res: Response, next: any){
    await clientsModel.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    );
    res.redirect('/'); 
}


async function procura(req: Request, res: Response, next: any) {
        const search = req.query.search as string || '';
        const clients = await clientsModel.findAll({
            where: {
                [Op.or]: [
                    { nome: { [Op.like]: `%${search}%` } },
                    { email: { [Op.like]: `%${search}%` } }
                ]
            }
        });
        res.render("procura", { clients, search });
}


export default {index, create, store, show, edit, update, del, procura};
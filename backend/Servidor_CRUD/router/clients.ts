
import { Router } from "express";
import clientsController from "../controller/clientsController.js";

const router = Router();

// router.get('/', (req, res) =>{
//     res.render("index")
// })

router.get('clientes/', clientsController.index)
// router.get('/', (req, res) =>{
//     res.send("Rota Inicial")
// })


router.get('/clientes/sobrenos', (req, res) => {
    res.send("Agora o servidor atualiza sozinho!");
})

router.get('/clientes/contato', (req, res) =>{
    res.send("Rota contato")
})

router.get('/clientes/create', clientsController.create)

router.get('/clientes/procura', clientsController.procura)

router.get('/clientes/:id', clientsController.show)

router.get('/clientes/edit/:id', clientsController.edit)


router.post('/clientes/create', clientsController.store)

router.post('/clientes/edit/:id', clientsController.update)

router.post('/clientes/del/:id', clientsController.del)


export default router;
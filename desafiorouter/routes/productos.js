const express = require("express");
const { Router} = express;
const routerProductos = new Router();


routerProductos.get("/", (req,res) => {
    res.send ("get ok productos");
})

routerProductos.get("/:id", (req,res) => {
    let id = req.id;
    res.send (`get ok productos ${id}`);
})

routerProductos.post("/", (req,res) => {
    let id = req.id;
    res.send (`POSTt ok productos`);
})

routerProductos.put("/:id", (req,res) => {
    let id = req.id;
    res.send (`PUT ok productos ${id}`);
})

routerProductos.delete("/:id", (req,res) => {
    let id = req.id;
    res.send (`ELIMINAR ok productos ${id}`);
})

module.exports = routerProductos;
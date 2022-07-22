const express = require("express");
const app = express();
const { Router} = express;
const router = Router();
const PORT = 8080;
const Contenedor = require("./utils/contenedor");
const contenedor = new Contenedor("productos.json"); 
const upload = require("./storage");
const bodyParser = require('body-parser');

router.get("/", (req,res) => {
    res.send ("PÁGINA PRINCIPAL");
})

router.get("/productos", (req,res) => {
    const listadoProductos = contenedor.getAll();
    res.json(listadoProductos)
})

router.get("/productos/:id", (req,res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    const productoSeleccionado = contenedor.getById(id);
    console.log(productoSeleccionado);
    if (productoSeleccionado == undefined) {
        res.send (`El producto seleccionado no existe`);
    }
    else {
        res.json (productoSeleccionado);
    }
    
})

router.post("/productos", (req,res) => {
    const nuevoProducto = req.body;
    console.log(nuevoProducto);
    res.json(nuevoProducto);
})


router.put("/productos/:id", (req,res) => {
        const id = parseInt(req.params.id);
        const data = contenedor.getAll();
        let producto = contenedor.getById(id);
        if (producto == undefined) {
            res.send (`El producto seleccionado no existe`);
        }
        else {
            contenedor.deleteById(id);
            producto= req.body;
            producto.id = id;
            data.push(producto);
            res.send (`Producto actualizado`);

        }
})

router.delete("/productos/:id", (req,res) => {
    const id = parseInt(req.params.id);
    contenedor.deleteById(id);
    res.send (`Producto con el ${id} borrado`);
})


app.use("/api",router);
app.use(express.json());


app.listen (PORT, () =>  {
    console.log (`El servidor está escuchando en el puerto ${PORT}`);
})

app.on("error", error => console.log(`Error ${error}`));

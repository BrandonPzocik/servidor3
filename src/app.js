//iniciamos servidor 
const express = require("express")
const bd = require("./bd")
//crear servidor 
const app = express(); 

//miredwares 
app.use(express.json()); 

//RUTAS GET  
app.get("/", (req, res) => {
    res.send("pagina principal de clientes")
});
//obtenemos todos los clientes 
app.get("/clientes", (req, res) => {
    res.json(bd)
});
//obtenemos los clientes por su id 
app.get("/clientes/:id", (req, res)=> {
    const id = parseInt(req.params.id)
    const obtenerCliente = bd.find((cliente) => cliente.id === id)
    res.json(obtenerCliente)
});

//RUTAS POST 
//crear un nuevo cliente
app.post("/clientes", (req, res) => {
    const {id, cliente } = req.body
    const nuevoCliente = bd.push({id:id, cliente:cliente})
    console.log(nuevoCliente)
    res.json({mensaje: "cliente creado con exito"})
})
//RUTA PUT 
//editar un usuario 
app.put("/clientes/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const actualizar = bd.find((cliente) => cliente.id === id)
    const {cliente} = req.body 

    actualizar.cliente = cliente
    console.log(actualizar)
    res.json({mensaje: "cliente actualizado con exitooo"})
})
//ponemos en escucha el servidor 
app.listen(3000, ()=>{
    console.log("servidor corriendo")
});
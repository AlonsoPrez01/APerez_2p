const fs = require("fs");
fs.readFile('ventas.txt', "utf8", (error, datos) => {
    if(error){
        console.error("Se ha generado un error al leer el archivo");
    } else {
        const compradores = datos.split("\n");
        compradores.forEach((comprador) => {
            const compra = comprador.split(",");
            const cantidad = parseInt(compra[2]);
            const precio = parseInt(compra[3]);
        });
        console.log(`VENTA TOTAL  $${total.toFixed(2)}`);
    }
});
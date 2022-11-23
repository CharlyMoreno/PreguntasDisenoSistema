const express = require("express");
const app = express();
const contendor = require('./Contenedor.js')
const cont1 = new contendor.Contenedor('preguntas.json');

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));

app.get("/getRandom", async (req, res) => {
    const data = await cont1.getRandom();
    res.json(data);
});

app.listen(8080, () => {
    console.log("Listen on the port 8080...");
});
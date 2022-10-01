const express = require("express");
const { Server: HttpServer } = require("http");
const app = express();
const httpServer = new HttpServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 8080;


app.get("/", (req, res) => {
    res.json({
        ok: true
    });
});

app.get("/app", (req, res) => {
    res.json({
        ok: true
    });
});

httpServer.listen(PORT, () => console.log("Servidor corriendo en el puerto", PORT));

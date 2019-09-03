const express = require ("express");
const app = express()
const mc = require("./controllers/messages_controller")

app.use(express.json());

const mcURL = "/api/messages";
app.post(mcURL, mc.create);
app.get(mcURL, mc.read)
app.get(`${mcURL}/:id`, mc.delete)


const port = 3001
app.listen(port, () => {
    console.log(`someone is using the restroom on ${port}`)
})
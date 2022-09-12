const express = require("express")
// const { GetPrice } = require("./controller/controller")

const app = express();
app.use(express.json());

const Router = express.Router();

// app.use("/https://api.storerestapi.com/products", Router)
// Router.get("/find/title", GetPrice)







app.listen(5000, ()=> {
    console.log("Server is Running at Port 5000");
});
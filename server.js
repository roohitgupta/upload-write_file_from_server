const express = require("express");
const XLSX = require("xlsx");
var workbook = XLSX.readFile("product_list.xlsx");
// const { GetPrice } = require("./controller/controller")

const app = express();
app.use(express.json());

// const Router = express.Router();

// app.use("/https://api.storerestapi.com/products", Router)
// Router.get("/find/title", GetPrice)

let worksheet = workbook.Sheets[workbook.SheetNames[0]];

for(let i=2; i<11; i++){
    const name = worksheet[`A${i}`].v;
    console.log(name);
}





app.listen(5000, ()=> {
    console.log("Server is Running at Port 5000");
});
const express = require("express");
const XLSX = require("xlsx");
var workbook = XLSX.readFile("product_list.xlsx");
const axios = require('axios');

const app = express();
app.use(express.json());


const getData = (name)=> {
    axios.get(`https://api.storerestapi.com/products/${name}`)
    .then((res)=> {
        const response = res.data;
        console.log(response.data.title, response.data.price);
    }).catch(err => console.log(err));
};


let worksheet = workbook.Sheets[workbook.SheetNames[0]];
for(let i=2; i<11; i++){
    const name = worksheet[`A${i}`].v;
    // console.log(name);
    getData(name);
};










app.listen(5000, ()=> {
    console.log("Server is Running at Port 5000");
});
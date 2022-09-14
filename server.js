// const express = require("express");
const XLSX = require("xlsx");
// const axios = require('axios');
const fs = require('fs');

// const app = express();
// app.use(express.json());

const getData = (name)=> {
    axios.get(`https://api.storerestapi.com/products/${name}`)
    .then((res)=> {
        const response = res.data;
        console.log(response.data.title, response.data.price);
    }).catch(err => console.log(err));
};

// let worksheet = workbook.Sheets[workbook.SheetNames[0]];
// for(let i=2; i<worksheet.length; i++){
//     const name = worksheet[`A${i}`].v;
//     console.log(name);
//     getData(name);
// };

// app.listen(5000, ()=> {
//     console.log("Server is Running at Port 5000");
// });

const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const upload = require("express-fileupload");
app.use(upload());
const readXlsxFile = require("read-excel-file/node");




app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
   if(req.files) {
    console.log(req.files)
    
    const workbook = XLSX.read(req.files.file.data);
    let worksheet = workbook.Sheets[workbook.SheetNames[0]];
    for(let i=2; i<worksheet.length; i++){
        const name = worksheet[`A${i}`].v;
        console.log(name);
        getData(name);
    };
    
    console.log('worksheet', worksheet)

        res.setHeader('Content-disposition', 'attachment; filename=file.xlsx');
        res.setHeader('Content-type', 'mimetype');
    
        // var filestream = fs.createReadStream(new File(worksheet));
        // filestream.pipe(res);
    return res.download(worksheet)
   }
});




app.listen(5000, ()=> {
    console.log("Server is Running at Port 5000");
});
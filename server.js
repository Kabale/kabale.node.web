const express = require('express');
var birds = require('./src/routes/birds');

var app = express();



app.use('/birds', birds);

app.get("/", (req, res) => {
    res.json('index');
})


app.listen(3000, () => {
    console.log("listen on localhost:3000");
})
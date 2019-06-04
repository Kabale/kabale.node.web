const express = require('express'),
    birds = require('./src/routes/birds');
    contacts = require('./src/routes/contacts'); 
var app = express();

app.set('view engine', 'pug');
app.set('views', './src/views');

app.use('/birds', birds);

app.use('/contacts', contacts)

app.get("/", (req, res) => {
    res.json('index');
})


app.listen(3000, () => {
    console.log("listen on localhost:3000");
})
const express = require('express'),
    indexRouter = require('./src/routes/indexRouter'),
    contactsRouter = require('./src/routes/contactsRouter'); 
var app = express();

app.set('view engine', 'pug');
app.set('views', './src/views');

// Public directory
app.use(express.static('src/public'));
app.use('/dist', express.static('dist'));

// Routes Middleware
app.use('/', indexRouter);
app.use('/contact', contactsRouter)

// Run listener
app.listen(3000, () => {
    console.log("listen on localhost:3000");
});
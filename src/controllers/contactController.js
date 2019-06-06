var Contact = require('../models/contact');
var db = require('../database/db');

// Display list of all Contacts
exports.contact_list = function(req, res) {
    var done = function() {
        console.log("connected");
    };
    db.connect(db.MODE_TEST, done);
    var connection = db.get();
    connection.query('SELECT * FROM contact', function(err, result, fields){
        if(err) throw err;
        res.render('contact/list', {title: 'Contacts', message: 'Contacts', data: result});
        db.end();
    });
    //res.send('Not implemented : Contact list');
}

// Display detail page for a specific Contact
exports.contact_detail = function(req, res) {
    var done = function() {
        console.log("connected");
    };
    db.connect(db.MODE_TEST, done);
    
    var connection = db.get();
    connection.query('SELECT * FROM contact WHERE id = ' + req.params.id, function(err, result, fields){
        if(err) throw err;
        res.render('contact/detail', {title: 'Contact', message: 'Contact', data: result[0]});
        db.end();
    });
    //res.send('Not implemented : Contact details');
}

// Handle Contact create on GET
exports.contact_create_get = function(req, res) {
    res.render('contact/form', {title: 'Create Contact', message: 'Create contact'});
    //res.send('Not implemented : Contact create GET');
}

// Handle Contact create on POST
exports.contact_create_post = function(req, res) {
    res.send('Not implemented : Contact create POST');
}

// Handle Contact update on GET
exports.contact_update_get = function(req, res) {
    res.send('Not implemented : Contact update GET');
}

// Handle Contact update on POST
exports.contact_update_put = function(req, res) {
    res.send('Not implemented : Contact update PUT');
}

// Handle Contact create on GET
exports.contact_delete_delete = function(req, res) {
    res.send('Not implemented : Contact delete DELETE');
}


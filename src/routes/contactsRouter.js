var express = require('express');
var contactController = require('../controllers/contactController');
var router = express.Router();


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('ContactRouter');
    console.log('Time: ', Date.now());
    next();
});

// GET Contacts List 
// Sample : /contact
router.get('/', contactController.contact_list);

// GET Contact Form Create
// /contact/create
router.get('/create', contactController.contact_create_get);

// POST Contact Form Create
// /contact/create
router.post('/create', contactController.contact_create_post);

// GET Contact Form Update
// /contact/update
router.get('/:id/update', contactController.contact_update_get);

// PUT Contact Form Update
// /contact/1/update
router.put('/:id/update', contactController.contact_update_put);

// DELETE Delete Contact
// /contact/1/delete
router.delete('/:id/delete', contactController.contact_delete_delete)

// Get Contact Detail 
// Sample : /contact/1
router.get('/:id', contactController.contact_detail);

module.exports = router;
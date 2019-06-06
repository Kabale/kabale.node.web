var Contact = function() {
    this.id = null;
    this.firstname = null;
    this.lastname = null;
    this.birthdate = null;
}

// MUTATORS
Contact.prototype.getId = function() {
    return this.id;
}

Contact.prototype.setId = function(id) {
    this.id = id;
}

Contact.prototype.getFirstname = function() {
    return this.firstname;
}

Contact.prototype.setFirstname = function(firstname) {
    this.firstname = firstname;
}

Contact.prototype.getLastname = function() {
    return this.lastname;
}

Contact.prototype.setLastname = function(lastname) {
    this.lastname = lastname;
}

Contact.prototype.getBirthdate = function() {
    return this.birthdate;
}

Contact.prototype.setBirthdate = function(birthdate) {
    this.birthdate = birthdate;
}

// FUNCTIONS
Contact.prototype.fill = function(data) {
    for(var field in data) {
        if(this.hasOwnProperty(field) && data.hasOwnProperty(field)){
            if(this[field] !== 'undefined') {
                this[filed] = data[field];
            }
        }
    }
}

// DATABASE 
Contact.prototype.save = function() {

}

Contact.prototype.retrieve = function(id) {

}

Contact.prototype.find = function(data) {
    
}

module.exports = Contact;
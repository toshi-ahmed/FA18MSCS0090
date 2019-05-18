const mongoose = require('mongoose');


    var Student = mongoose.model('Student', {
        first_name: { type: String },
        last_name : { type: String },
        roll_no: { type: String },
       
    
});

module.exports = {Student} 

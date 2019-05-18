const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Student } = require('../models/student');


// => localhost:3000/employee/
router.get('/', (req, res) => {
    Student.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Students :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : ${req.params.id}' );
    
        Student.findById(req.params.id, (err, doc) => {
            if(!err) {res.send(doc);}
            else { console.log('Error in Retriving Students :' + JSON.stringify(err, undefined, 2));}
    });
    
});


router.post('/', (req, res) => {
    var stu = new Student({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        roll_no: req.body.roll_no,
        
    });
    stu.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Student Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}' ); 

    var stu = new Student({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        roll_no: req.body.roll_no,
        
    });
    Student.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Student Update :' + JSON.stringify(err, undefined, 2)); }
    } );
});



router.delete('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');

    Student.findByIdAndDelete(req.params.id, (err,doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Student Delete :' + JSON.stringify(err, undefined, 2)); }
    } );
});

module.exports = router;
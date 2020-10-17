const router = require('express').Router();
const notes = require('../db/db.json');
const createNewNote = require('../lib/notes');

//this will return the notes from db.json
router.get('/notes', (req, res) => {
    res.json(notes);
});

//this will save the notes to the server
router.post('/notes', (req, res) => {
    //setting the id
    const newNote = createNewNote( req.body, notes );
    console.log(newNote);

    
});

module.exports = router;
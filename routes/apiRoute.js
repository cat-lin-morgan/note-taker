const router = require('express').Router();
let notes = require('../db/db.json');
const { createNewNote, deleteOldNote } = require('../lib/notes');

//this will return the notes from db.json
router.get('/notes', (req, res) => {
    res.json(notes);
});

//this will save the notes to the server
router.post('/notes', (req, res) => {
    const newNote = createNewNote( req.body, notes );
    console.log(newNote);
    notes.push(newNote);
    res.json(newNote);
});

//this will delete them from the server and should update the json file
router.delete('/notes/:id', (req, res) => {
    const newNotes = deleteOldNote(req.params.id, notes);
    res.json(newNotes);
    notes = newNotes;
});

module.exports = router;
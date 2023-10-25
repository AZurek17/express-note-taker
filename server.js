const express = require('express');
const path = require('path');

const notesDb = require('./db/db.json');
const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))



//Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"))
});

app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "public/notes.html"))
})

// 
// create note - takes in JSON input
// add.post("/api/notes/title" ,)

//listener
app.listen(PORT, function () {
    console.log(`Listening to http://localhost:${PORT}`)
});
//app.listen(PORT, () => console.log('test'));
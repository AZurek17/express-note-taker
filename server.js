const express = require('express');
const path = require('path');
const fs = require('fs');

const notesDb = require('./db/db.json');
const PORT = 3000;

const app = express();

//generating unique ids
const uuid = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

//Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//GET Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"))
})

app.get("/api/notes", (req, res) => {res.json(notesDb);})

//POST Routes
app.post("/api/notes", (req, res) => {
    console.info(`${req.method} request recieved to add a note`);

    const { title, text } = req.body;
    if (req.body) {
        const newNote ={
            title,
            text,
            note_id: uuid(),
        };

   const noteString = JSON.stringify(newNote);
    
   fs.writeFile('./db/db.json', noteString, (err) =>
    err ? console.error(err) : console.log(' Data written to db.json ') )
    }
}); 
  
   

    

// 
// create note - takes in JSON input
// add.post("/api/notes/title" ,)

//listener
app.listen(PORT, function () {
    console.log(`Listening to http://localhost:${PORT}`)
});
//app.listen(PORT, () => console.log('test'));
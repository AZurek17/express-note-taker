const express = require('express');
const path = require('path');
const fs = require('fs');
// const util = require('util');
const notesDb = require('./db/db.json');

const port = process.env.PORT || 3000;
const app = express();

//generating unique ids
const uuid = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

//promise version of fs.readFile
// const readFromFile = util.promisify(fs.readfile);

const writeToFile = (location, content) =>
    fs.writeFile(location, JSON.stringify(content), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${location}`)
    );

const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);        
            writeToFile(file, parsedData);
        }
    });
};

//Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


//GET Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
});

app.get("/api/notes", (req, res) => {res.json(notesDb);}
    // readFromFile('./db/db.json').then((data) =>  res.json(JSON.parse(data)))
);


//POST Routes

app.post("/api/notes", (req, res) => {
    const { title, text } = req.body;

    if (title && text) {
        const newNotes = {
            title,
            text,
            id: uuid(),
        };

        readAndAppend(newNotes, './db/db.json');

        const response = {
            status: 'success',
            body: newNotes,
        };

        res.json(response);
        
    } else {
        res.json("Error in posting note")
    }   
});
app.get("/api/notes", (req, res) => {res.json(notesDb)});

//listener

app.listen(port, function () {
    console.log(`Listening to http://localhost:${port}`)
});

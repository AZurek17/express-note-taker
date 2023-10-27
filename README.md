# express-note-taker ![GitHub License Badge](https://img.shields.io/badge/License-MIT-yellow)

[Visit the Deployed Site](https://git.heroku.com/morning-garden-10823.git)

## Technology Used:

* node - https://nodejs.org/en/about
* npm - https://www.npmjs.com/
* express -https://expressjs.com/

## Description

This application allows a user to write, save, and delete notes, so you can keep track of tasks. The application uses Express.js back end which saves and retrieves data from a JSON file.

## Table of Contents
  
   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Badges](#badges)
   * [Tests](#tests)
   * [Contributing](#contributing)
   * [Credits](#credits)

 ## Installation

 This application requires express.js. To install run: nmp install.

 ## Usage

 When the application is started. You are presented with a home page which has a button to get started with send you to the notes page when clicked. When you are at the notes page. Once you can enter a new title and a note, a save button shows up next to the clear form button allowing you to save your note. Once the save buttom is click. The new note saves and appears in the left column with other existing notes and the buttons. When you select an existing note in the list, the saved information displays and a new note button appears at the top right corner. To delete a note, just click on the icon in the notes list.

 Everything was accomplished by using Express.js.  Below are a few code snippet connecting the back end to the front end with routes.

 A Get Route:

    app.get("/notes", (req, res) => {res.sendFile(path.join(__dirname, "public/notes.html"))
    })


A Post Route:

    app.post("/api/notes", (req, res) => {
        --code omitted--
    });

Delete Route:

    app.delete("/api/notes/:id", (req, res) => {
            --code omitted--
        });

PORT listner:

    app.listen(PORT, function () {console.log(`Listening to http://localhost:${PORT}`)});


Unique ID generater used to add IDs to notes:

    const uuid = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
    };


 ## License

 This project is licensed with MIT license

 Link to License - [Website to MIT License]((https://opensource.org/license/mit))

 ## Badges

 ![GitHub License Badge](https://img.shields.io/badge/License-MIT-yellow)

 ## Tests

 This application does not have any tests

 ## Contributing

 Contact me if you interested in contributing:

 Check out my [github](https://github.com/AZurek17) page or send me a [email](mailto:andyzurek@gmail.com)

 ## Credits

 * Tutor Session
 * ChatGPT
 * StudyGroup
 * AskBCS Learning Assistant

 &copy;2023, Written by Andy Zurek


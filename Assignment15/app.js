const express = require('express');
const { parse } = require('node-html-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const formPage = fs.readFileSync('./index.html', 'utf8');
    res.send(formPage);
});

app.post('/submit', (req, res) => {
    const { name, email } = req.body;

    const userData = `${name}, ${email}\n`;
    fs.appendFile('./userdata.txt', userData, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error writing user data to file.');
        }

        res.redirect(`/display?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`);
    });
});

app.get('/display', (req, res) => {
    const { name, email } = req.query;
    const displayPage = fs.readFileSync('./display.html', 'utf8');

    const root = parse(displayPage);
    root.querySelector('#name').set_content(name);
    root.querySelector('#email').set_content(email);

    res.send(root.toString());
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

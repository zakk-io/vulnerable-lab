const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


// fontend route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});



app.get('/auth-bypass', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' , 'bugs', 'auth-bypass', 'auth-bypass.html'));
});



//xss
app.get('/xss', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'bugs','xss', 'xss.html'));
});


app.get('/xss/stored', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'bugs','xss', 'labs', 'stored-xss.html'));
});

app.get('/xss/reflected', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'bugs','xss', 'labs', 'reflected-xss.html'));
});

app.get('/xss/dom', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'bugs','xss', 'labs', 'dom-xss.html'));
});




// Start server
app.listen(2000, () => {
    console.log(`Server running on http://localhost:2000`);
});
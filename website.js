const express = require('express');
const app = express();

const path = require('path');


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});



// midlle ware
app.use(express.static('public'))



const PORT = process.env.PORT || 3811;

app.listen(PORT, console.log(`Server running on  ${PORT}`));
const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000 || process.env.PORT;

// Set static folder
app.use(express.static(path.join(__dirname,'public')));

app.listen(PORT,() => {
    console.log(`Running on port ${PORT}`);
});
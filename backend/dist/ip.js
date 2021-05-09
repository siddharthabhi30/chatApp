"use strict";
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
app.get("/", cors(), (req, res) => {
    res.send('http://localhost:3000');
});
app.use(cors());

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../src/')));
app.use('/img', express.static(path.join(__dirname, '../img/')));
app.use('/css', express.static(path.join(__dirname, '../css/')));

app.listen(3000);
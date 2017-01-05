const express = require('express');
const stylus = require('stylus');

const app = express();
// Order matters with middleware!
// Need to generate .css files *first*.
// Then serve them using express.static.
app.use(stylus.middleware(process.argv[3]));
app.use(express.static(process.argv[3]));

app.listen(process.argv[2]);

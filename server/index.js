const express = require('express');
const app = express();

const port = 8000;

app.use("/", express.static("public"));
app.use("/js", express.static("../client/dist"));

app.listen(port, () => console.log(`web serving on http://localhost:${port}/`));
const express = require('express');
const app = express();

const port = 8000;

app.use(express.static("../wwwroot"));
app.listen(port, () => console.log(`web serving on http://localhost:${port}/`));
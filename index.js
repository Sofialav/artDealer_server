const express = require("express");
const cors = require("cors");
const materialRouter = require("./material/router");
const genreRouter = require("./genre/router");
const artist = require("./artist/model");
const artwork = require("./artwork/model");
const artForm = require("./artForm/model");

const port = process.env.PORT || 4000;
const app = express();
const corsMW = cors();
const parserMW = express.json();

app.use(corsMW);
app.use(parserMW);
app.use(materialRouter);
app.use(genreRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));

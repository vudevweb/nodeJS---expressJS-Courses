const express = require("express");
const morgan = require("morgan");
const path = require("path");
const exphbs = require("express-handlebars");
var methodOverride = require("method-override");
const app = express();
const port = 3000;

const route = require("./src/routes");
const db = require("./src/config/db");

// connect to db
db.connect();

app.use(express.static(path.join(__dirname, "src/public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(methodOverride("_method"));

// http logger
app.use(morgan("combined"));

// template engine
app.engine(
  "hbs",
  exphbs.create({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "src/resources/views/layouts"),
    partialsDir: path.join(__dirname, "src/resources/views/partials"),
    pagesDir: path.join(__dirname, "src/resources/views/pages"),
    helpers: {
      sum: (a, b) => a + b,
    },
  }).engine
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/resources/views/pages"));
// end template engine

// route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

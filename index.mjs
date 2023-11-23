import express from "express";
import 'dotenv/config';

// handlebars
import hbs from "hbs";

// __dirname
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const PORT = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Archivos estáticos
 */
app.use(express.static("public"));

/**
 * Template engine
 * Handlebars
 */

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials", function (err) {
  if (err) console.log(err);
});

/**
 * App endpoints
 */

app.get("/", (req, res) => {
  res.render("index", {
    name: "Alexander",
    title: "RoadTrip - LA",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    name: "Illvianey",
    title: "RoadTrip - LA",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    name: "Emyia",
    title: "RoadTrip - LA",
  });
});

app.listen(PORT, () => {
  console.log(`App running on PORT http://localhost:${PORT}`);
});

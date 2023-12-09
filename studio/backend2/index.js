const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const models = require("./models");

const Role = models.Role;
const app = express();
const corsOptions = {
  origin: "http://localhost:3001",
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
// app.use(fileUpload());

const login = require("./routers/user.routes");
app.use("/", login);
const role = require("./routers/role.routes");
app.use("/", role);

const album = require("./routers/album.routes");
app.use("/", album);

const category = require("./routers/category.routes");
app.use("/", category);

const place = require("./routers/place.routes");
app.use("/", place);

const blog = require("./routers/blog.routes");
app.use("/", blog);

const comment = require("./routers/comment.routes");
app.use("/", comment);
const rating = require("./routers/rating.routes");
app.use("/", rating);
const tour = require("./routers/booking.routes");
app.use("/", tour);

const dashboard = require("./routers/dashboard.routes");
app.use("/", dashboard);

const order = require("./routers/order.routes");
app.use("/", order);

// const token = require("./routers/token.routes");

// app.use("/", token);

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(3000, () => {
  console.log("sever running on ports 3000 ");
});

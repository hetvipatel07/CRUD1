const express = require("express");
const user_routes = express();

const bodyParser = require("body-parser");
user_routes.use(bodyParser.json());
user_routes.use(bodyParser.urlencoded({ extended: true }));

const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage

// filename: function (req, file, cb) {
//     const name = Date.now() + "-" + file.originalname;
//     cb(null, name, function (err, success1) {
//       if (err) throw err;
//     });
//   };

  const upload = multer({ storage: storage });

  const user_controller = require("../controllers/userController");

  user_routes.post("/register",user_controller.register_user);

  module.exports = user_routes;


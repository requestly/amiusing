const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .use(function (req, res, next) {
    req.headers["x-forwarded-proto"] !== "http"
      ? res.redirect(302, "https://" + req.hostname + req.originalUrl)
      : next();
  })
  .get("/", (req, res) => res.render("pages/no"))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

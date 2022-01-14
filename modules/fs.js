const fs = require("fs");
const path = require("path");
// Papka yaratish
// fs.mkdir(path.join(__dirname, "/papka"), {}, (err) => {
//   if (err) throw err;
//   console.log("papka yaratildi");
// });

// File yaratish
// fs.writeFile(
//   path.join(__dirname, "/papka", "file.js"),
//   "//node js orqali yaratildi",
//   (err) => {
//     if (err) throw err;
//     console.log("papka yaratildi");
//   }
// );
// fs.appendFile(
//   path.join(__dirname, "/papka", "file.js"),
//   "//world s js orqali yaratildi",
//   (err) => {
//     if (err) throw err;
//     console.log("papka yaratildi");
//   }
// );

// fs.rename(
//   path.join(__dirname, "/papka", "file.js"),
//   path.join(__dirname, "/papka", "fayil.js"),
//   (err) => {
//     if (err) throw err;
//   }
// );
fs.readFile(path.join(__dirname, "/papka", "fayil.js"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

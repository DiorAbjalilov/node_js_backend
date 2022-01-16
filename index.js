const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const book = [
      { name: "Diyor", age: 21, titile: "student" },
      { name: "Adash", age: 20, titile: "student-1" },
      { name: "Shahzod", age: 23, titile: "student-2" },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(book));
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, console.log(`Server running on port: ${PORT}`));

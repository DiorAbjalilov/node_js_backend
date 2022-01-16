const http = require("http");
const fs = require("fs");
const getBodyData = require("./util");

const books = [{ id: "1", titile: "Book n1", pages: 123, authur: "Diyor 1" }];

const server = http.createServer(async (req, res) => {
  // GET api books
  if (req.url === "/books" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json charset=utf8" });
    const respons = {
      status: "OK",
      books,
    };
    res.end(JSON.stringify(respons));
  } else if (req.url === "/books" && req.method === "POST") {
    const data = await getBodyData(req);
    const body = JSON.parse(data);
    console.log(body);
  }
});

server.listen(3000, () => {
  console.log("server running on port: 3000");
});

const http = require("http");
const { v4 } = require("uuid");
const fs = require("fs");
const getBodyData = require("./util");

let books = [{ id: "1", title: "Book n1", pages: 123, authur: "Diyor 1" }];

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
    const { title, pages, authur } = JSON.parse(data);
    const newBook = {
      id: v4(),
      title,
      pages,
      authur,
    };
    books.push(newBook);
    const resp = {
      status: "Create",
      book: newBook,
    };
    res.writeHead(200, { "Content-Type": "application/json charset=utf8" });

    res.end(JSON.stringify(resp));
  } else if (req.url.match(/\/books\/\w+/) && req.method === "GET") {
    const id = req.url.split("/")[2];
    const book = books.find((b) => b.id === id);
    res.writeHead(200, { "Content-Type": "application/json charset=utf8" });
    const resp = {
      status: "OK",
      book,
    };
    res.end(JSON.stringify(resp));
  } else if (req.url.match(/\/books\/\w+/) && req.method === "PUT") {
    const id = req.url.split("/")[2];
    const data = await getBodyData(req);
    const { title, pages, authur } = JSON.parse(data);
    const idx = books.findIndex((b) => b.id === id);
    const changeBooks = {
      id: books[idx].id,
      title: title || books[idx].title,
      pages: pages || books[idx].pages,
      authur: authur || books[idx].authur,
    };
    books[idx] = changeBooks;
    res.writeHead(200, { "Content-Type": "application/json charset=utf8" });
    const resp = {
      status: "OK",
      book: changeBooks,
    };
    res.end(JSON.stringify(resp));
  } else if (req.url.match(/\/books\/\w+/) && req.method === "DELETE") {
    const id = req.url.split("/")[2];
    books = books.filter((b) => b.id !== id);
    res.writeHead(200, { "Content-Type": "application/json charset=utf8" });
    const resp = {
      status: "DELETED",
    };
    res.end(JSON.stringify(resp));
  }
});

server.listen(3000, () => {
  console.log("server running on port: 3000");
});

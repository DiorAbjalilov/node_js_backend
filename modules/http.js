const http = require("http");

const server = http.createServer((req, res) => {
  res.write("server ishladi");
  res.end();
});

server.listen(1111, () => console.log("node server ishladi"));

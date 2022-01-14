const url = require("url");

const urleNew = new URL(
  "http://diyor.me:5000/about/about.html?name=diyor&age=21"
);
// href
// console.log(urleNew.href);

// host name
// console.log(urleNew.hostname);

// port bilan birga
// console.log(urleNew.host);

// path name
// console.log(urleNew.pathname);

// query parametris
// console.log(urleNew.search);

// query Obj
// console.log(urleNew.searchParams);

// add obj new params
urleNew.searchParams.append("fristName", "Abjalilov");
urleNew.searchParams.append("fristName_1", "Begmamatov");
// console.log(urleNew.searchParams);

console.log(
  urleNew.searchParams.forEach((item) => {
    console.log(item);
  })
);

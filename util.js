function getBodyDate(req) {
  return new Promise((resolve, rejects) => {
    try {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        resolve(body);
      });
    } catch (error) {
      rejects(error);
    }
  });
}

module.exports = getBodyDate;

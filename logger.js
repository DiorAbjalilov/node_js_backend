const EventEmitter = require("events");
const uuid = require("uuid");

// console.log(uuid.v4());
class Logger extends EventEmitter {
  log(method, route) {
    this.emit("message", { id: uuid.v4(), method, route });
  }
}

module.exports = Logger;

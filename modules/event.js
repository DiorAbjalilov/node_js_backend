const EventEmitter = require("events");

// Event Emitter dan meros olish
class NewEmitter extends EventEmitter {}

// instion Obect
const newEmitter = new NewEmitter();

// Event lestenir
newEmitter.on("hello", () => {
  console.log("salom hello world");
});

newEmitter.on("salom", () => {
  console.log("salom dunyo");
});

newEmitter.emit("hello");
newEmitter.emit("salom");
newEmitter.emit("hello");

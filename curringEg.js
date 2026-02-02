const createLogger = (level) => (message) =>
  `[${level.toUpperCase()}] ${message}`;

const infoLogger = createLogger("info");
const warnLogger = createLogger("warn");
const errorLogger = createLogger("error");

console.log(warnLogger("Low disk space"));
console.log(infoLogger("Application started"));
console.log(errorLogger("Unhandled exception"));

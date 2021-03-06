const youtubeLogger = require("./youtubeLogger");
const productionLogger = require("./productionLogger");
require("dotenv").config();
let logger = null;

if (process.env.NODE_ENV === "youtube") {
	logger = youtubeLogger();
}

if (process.env.NODE_ENV === "production") {
	logger = productionLogger();
}

module.exports = logger;

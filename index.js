const Snowflake = require("./lib/snowflake");
const config = require('./config/config');
const idWorker = new Snowflake(config.worker_id, config.datacenter_id);
module.exports = idWorker;
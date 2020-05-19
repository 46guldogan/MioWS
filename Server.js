const exists = require("fs").existsSync;

const Handler = require("./handler");
const Config = require("./cfg");
const Installer = require("./installer");

if (exists(Config.www_path)) {
  Handler;
} else {
  Installer();
  Handler;
}





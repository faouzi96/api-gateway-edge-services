const path = require('path');
const gateway = require('express-gateway');
require("./build/classService.js");
require("./build/userService.js");

gateway()
  .load(path.join(__dirname, 'config'))
  .run();

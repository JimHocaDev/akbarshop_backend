const auth = require("./auth.routes");
const blog = require("./blog.routes");
const cart = require("./cart.routes");
const category = require("./category.routes");
const cloth = require("./cloth.routes");
const partner = require("./partner.routes");

module.exports = [auth, blog, cart, category, cloth, partner];

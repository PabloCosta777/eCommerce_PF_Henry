const users = require("../Models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const KEY = process.env.KEY;
const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

module.exports = {
  findUser: async (email) => {
    const response = await users.findAll({ where: { email } });
    return response;
  },
  createUser: async (name, email, password, isAdmin) => {
    const encriptedPassword = await bcrypt.hash(password, 8);
    await users.create({ name, email, password: encriptedPassword, isAdmin });
  },
  validateInfo: async (name, email, password, isAdmin) => {
    if (
      typeof name === "string" &&
      emailRegex.test(email) &&
      typeof password === "string" &&
      (isAdmin === "true" || isAdmin === "false")
    ) {
      return true;
    } else {
      return false;
    }
  },
  validatePassword: async (email, password) => {
    const user = await users.findOne({ where: { email } });
    const response = await bcrypt.compare(password, user.password);
    return response;
  },
  tokenGenerator: async (email) => {
    const userData = await users.findOne({
      attributes: ["isAdmin"],
      where: { email }
    });
    const isAdmin = userData.isAdmin;
    const token = await jwt.sign({ email, isAdmin }, KEY, { expiresIn: "10h" });
    return {token};
  }
};

const { validatePassword, tokenGenerator } = require("../Services/users");

module.exports = async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const check = await validatePassword(email, password);

    if (check) {
      const token = await tokenGenerator(email);
      res.send(token);
    }
  } else {
    res.send({ msg: "usuario y/o contraseña incorrecto" });
  }
};

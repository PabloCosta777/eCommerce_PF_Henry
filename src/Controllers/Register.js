const { findUser, createUser, validateInfo } = require("../Services/users");

module.exports = async (req, res) => {
  const { name, email, password, isAdmin } = req.body;
  const existUser = await findUser(email);

  try {
    if (existUser[0] !== undefined) res.send({ msg: "email ya en uso" });
    else if (validateInfo(name, email, password, isAdmin)) {
      createUser(name, email, password, isAdmin).then((e) => res.send(e));
      res.status(201).send({ msg: "usuario creado correctamente" });
    } else {
      res.send({ msg: "datos incorrectos" });
    }
  } catch {
    res.send("oh no!");
  }
};

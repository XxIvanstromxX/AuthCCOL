const User = require("../models/users");

const getUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password");
    return res.json(users);
  } catch (err) {
    console.log("Ocurrio un error ", err);
    return res.status(500).json({ message: "Internal Error" });
  }
};

const updateRole = async (req, res) => {
  const { id } = req.params;
  const { rol } = req.body;

  //Validar Rol permitido
  const rolesPermitidos = ["user", "admin"];
  if (!rolesPermitidos.includes(rol)) {
    return res
      .status(400)
      .json({ message: "Rol no válido. Usa 'user' o 'admin'." });
  }

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({ message: "Usuario no encontrado" });
    }

    //Evitar que un admin se cambie a si mismo su rol
    if (user._id.equals(req.user._id)) {
      return res
        .status(403)
        .json({ message: "No puedes cambiar tu propio Rol" });
    }

    user.rol = rol;
    await user.save();

    res.json({
      message: "Rol actualizafo correctamente",
      user: { id: user._id, email: user.email, rol: user.rol },
    });
  } catch (err) {
    console.log("Hubo un error", err);
    res.status(500).json({ message: "Error al actualizar el rol del usuario" });
  }
};

module.exports = { getUsers, updateRole };

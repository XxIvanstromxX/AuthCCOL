// Crear un middleware para validar los permisos de un usuario

const authorizateRole = (requiredRol) => {
  return (req, res, next) => {
    if (!req.user || req.user.rol !== requiredRol) {
      return res
        .status(403)
        .json({ message: "Acceso denegado: Permisos insuficientes" });
    }
    next();
  };
};

module.exports = { authorizateRole };

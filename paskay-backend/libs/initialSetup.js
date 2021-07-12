const Role = require('../models/Role');
const Usuario = require('../models/usuario');

exports.createRoles = async () => {
  const count = await Role.estimatedDocumentCount()

  if (count > 0) return;

  try {
    new Role({name: 'user'}).save()
    new Role({name: 'moderator'}).save()
    const roleAdmin = await new Role({name: 'admin'}).save()
    new Usuario({username: 'admin',email: 'paskay@gmail.com', password: await Usuario.encryptPassword('apipaskay'), roles: [roleAdmin._id]}).save()
  }catch (error) {
    console.error(error)
  }
}

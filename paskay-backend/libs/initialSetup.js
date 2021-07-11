const Role = require('../models/Role');

exports.createRoles = async () => {
  const count = await Role.estimatedDocumentCount()

  if (count > 0) return;

  try {
    new Role({name: 'user'}).save()
    new Role({name: 'moderator'}).save()
    new Role({name: 'admin'}).save()
  }catch (error) {
    console.error(error)
  }
}

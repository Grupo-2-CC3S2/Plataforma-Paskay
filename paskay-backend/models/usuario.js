import bcrypt from "bcryptjs";
import { Schema, model } from "mongoose";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


//////////////////////////////////////////////////7

const UsuarioSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

UsuarioSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UsuarioSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword)
}

// Virtual for author's URL
UsuarioSchema
.virtual('url')
.get(function () {
  return '/catalog/usuario/' + this._id;
});

module.exports = mongoose.model('Usuario', UsuarioSchema);

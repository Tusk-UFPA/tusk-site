const mongoose = require("mongoose");
const { Schema } = mongoose;

//Schema para criar usaurío.
const usersSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const numberOfAcesses = new Schema(
  {
    count: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", usersSchema);
const NumberOfAcesses = mongoose.model("acess", numberOfAcesses);

//exportar o modolar
module.exports = {
  User,
  NumberOfAcesses,
};

"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Wallets,  Purchase}) {
      this.hasMany(Wallets, { foreignKey: 'user_id', onDelete: "cascade" })
      this.hasMany(Purchase, {foreignKey: 'user_id', onDelete: 'cascade'})
    }
  }
  User.init(
    {
      login: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  )
  return User
}

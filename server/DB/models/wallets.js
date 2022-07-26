'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wallets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Purchase}) {
      this.belongsTo(User, {foreignKey: 'user_id'})
      this.hasMany(Purchase, {foreignKey: 'wallet_id'})

    }
  }
  Wallets.init({
    user_id: DataTypes.INTEGER,  
    type: DataTypes.STRING,
    number:{type: DataTypes.INTEGER,
    unique: true},
    currentAmount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Wallets',
  });
  return Wallets;
};
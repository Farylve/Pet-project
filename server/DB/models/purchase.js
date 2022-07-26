'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Purchase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Wallets}) {
      this.belongsTo(User, { foreignKey: 'user_id' })
      this.belongsTo(Wallets, { foreignKey: 'wallet_id' })

    }
  }
  Purchase.init({
    user_id: DataTypes.INTEGER,
    wallet_id: DataTypes.INTEGER,
    sum: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Purchase',
  });
  return Purchase;
};
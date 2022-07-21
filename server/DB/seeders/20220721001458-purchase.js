'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Purchases', [{
      user_id: 1,
      wallet_id: 1,
      sum: 123,
      type: 'Продукты'
    },
    {
      user_id: 1,
      wallet_id: 1,
      sum: 124,
      type: 'Продукты'
    },
    {
      user_id: 1,
      wallet_id: 1,
      sum: 1222223,
      type: 'Алкоголь'
    },
    {
      user_id: 1,
      wallet_id: 1,
      sum: 9823,
      type: 'Одежда'
    },
    {
      user_id: 1,
      wallet_id: 1,
      sum: 123,
      type: 'Продукты'
    },
    {
      user_id: 1,
      wallet_id: 1,
      sum: 123,
      type: 'Продукты'
    },
    {
      user_id: 1,
      wallet_id: 1,
      sum: 71123,
      type: 'Хозяйственные товары'
    },
    {
      user_id: 1,
      wallet_id: 1,
      sum: 111223,
      type: 'Продукты'
    },
    
  
  
  
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

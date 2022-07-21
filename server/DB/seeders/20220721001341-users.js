'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     
     
      await queryInterface.bulkInsert('Users', [{
        
        login: 'John Doe',
        password: 'qwerty'
      }], {});
    
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

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Teams', [{
      name: 'Falcons',
      password: 'falcons45',
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'BullDogs',
      password: 'BullDog45',
      CoachId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Tigers',
      password: 'Tigers45',
      CoachId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

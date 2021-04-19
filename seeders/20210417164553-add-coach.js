'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Coaches', [{
      email: 'willie@example.com',
      name: 'Willie',
      password: '$2b$10$LeU9AWeHlIsAfnhciUqUl.bj49S3wLyFG5ZLWUgl.V1AFHk99w.8G', //password
      team: 'Falcons',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      email: 'willie1@example.com',
      name: 'Willie1',
      password: '$2b$10$LeU9AWeHlIsAfnhciUqUl.bj49S3wLyFG5ZLWUgl.V1AFHk99w.8G', //password
      team: 'BullDogs',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      email: 'willie2@example.com',
      name: 'Willie2',
      password: '$2b$10$LeU9AWeHlIsAfnhciUqUl.bj49S3wLyFG5ZLWUgl.V1AFHk99w.8G', //password
      team: 'Tigers',
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

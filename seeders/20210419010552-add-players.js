'use strict';
const player = require('../models/player')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Players', [{
      name: 'Jack Daniels',
      position: 'QB',
      TeamId: 1,
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'George Franks',
      position: 'RB',
      TeamId: 1,
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Johnny Walker',
      position: 'WR',
      TeamId: 1,
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Johnny Knox',
      position: 'WR',
      TeamId: 1,
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'John Galespe',
      position: 'WR',
      TeamId: 1,
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'George Franks',
      position: 'TE',
      TeamId: 1,
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'George Franks',
      position: 'Snapper',
      TeamId: 1,
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Johnny Nitas',
      position: 'QB',
      TeamId: 1,
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Jackie Chun',
      position: 'RB',
      TeamId: 1,
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Lamar Thomas',
      position: 'WR',
      TeamId: 1,
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Ray Cozi',
      position: 'WR',
      TeamId: 1,
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Jordan Phillips',
      position: 'WR',
      TeamId: 1,
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Lewis Franks',
      position: 'Snapper',
      TeamId: 1,
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Franklin Jaims',
      position: 'TE',
      TeamId: 1,
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Josh Hamilton',
      position: 'QB',
      TeamId: 2,
      CoachId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Bubba Jenkins',
      position: 'RB',
      TeamId: 2,
      CoachId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Krys Paul',
      position: 'WR',
      TeamId: 2,
      CoachId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Jackson Feilt',
      position: 'WR',
      TeamId: 2,
      CoachId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'John ruls',
      position: 'WR',
      TeamId: 2,
      CoachId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Smith Smiths',
      position: 'Snapper',
      TeamId: 2,
      CoachId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Lebron James',
      position: 'QB',
      TeamId: 2,
      CoachId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Allen Fiverson',
      position: 'RB',
      TeamId: 2,
      CoachId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Shaq Dawson',
      position: 'WR',
      TeamId: 2,
      CoachId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Phil Dawl',
      position: 'WR',
      TeamId: 2,
      CoachId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Heid Worths',
      position: 'WR',
      TeamId: 2,
      CoachId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Deandre Swift',
      position: 'TE',
      TeamId: 2,
      CoachId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Cafe Sooner',
      position: 'Snapper',
      TeamId: 2,
      CoachId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Jefe George',
      position: 'TE',
      TeamId: 2,
      CoachId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
    name: 'Jim Taylor',
    position: 'QB',
    TeamId: 3,
    CoachId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'Jim Brown',
    position: 'RB',
    TeamId: 3,
    CoachId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'Randy Floss',
    position: 'WR',
    TeamId: 3,
    CoachId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'Deshaun Wackson',
    position: 'WR',
    TeamId: 3,
    CoachId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'Randall Cobbs',
    position: 'WR',
    TeamId: 3,
    CoachId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'Haha clyde',
    position: 'Snapper',
    TeamId: 3,
    CoachId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'Kevin Mass',
    position: 'QB',
    TeamId: 3,
    CoachId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'Nick Harnett',
    position: 'RB',
    TeamId: 3,
    CoachId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'Jordy Kelson',
    position: 'WR',
    TeamId: 3,
    CoachId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'Donald Driver',
    position: 'WR',
    TeamId: 3,
    CoachId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'Vince Hombardi',
    position: 'WR',
    TeamId: 3,
    CoachId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'James Sparks',
    position: 'TE',
    TeamId: 3,
    CoachId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'Charles Footson',
    position: 'Snapper',
    TeamId: 3,
    CoachId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'Colt Mchoy',
    position: 'TE',
    TeamId: 3,
    CoachId: 3,
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
    return queryInterface.bulkDelete('Players', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

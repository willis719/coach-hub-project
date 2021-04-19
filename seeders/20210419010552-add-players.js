'use strict';
const player = require('../models/player')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Players', [{
      name: 'Jack Daniels',
      position: 'QB',
      team: 'Falcons',
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'George Franks',
      position: 'RB',
      team: 'Falcons',
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Johnny Walker',
      position: 'WR',
      team: 'Falcons',
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Johnny Knox',
      position: 'WR',
      team: 'Falcons',
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'John Galespe',
      position: 'WR',
      team: 'Falcons',
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'George Franks',
      position: 'TE',
      team: 'Falcons',
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'George Franks',
      position: 'Snapper',
      team: 'Falcons',
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Johnny Nitas',
      position: 'QB',
      team: 'Falcons',
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Jackie Chun',
      position: 'RB',
      team: 'Falcons',
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Lamar Thomas',
      position: 'WR',
      team: 'Falcons',
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Ray Cozi',
      position: 'WR',
      team: 'Falcons',
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Jordan Phillips',
      position: 'WR',
      team: 'Falcons',
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Lewis Franks',
      position: 'Snapper',
      team: 'Falcons',
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Franklin Jaims',
      position: 'TE',
      team: 'Falcons',
      CoachId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Josh Hamilton',
      position: 'QB',
      team: 'BullDogs',
      CoachId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Bubba Jenkins',
      position: 'RB',
      team: 'BullDogs',
      CoachId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Krys Paul',
      position: 'WR',
      team: 'BullDogs',
      CoachId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Jackson Feilt',
      position: 'WR',
      team: 'BullDogs',
      CoachId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'John ruls',
      position: 'WR',
      team: 'BullDogs',
      CoachId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Smith Smiths',
      position: 'Snapper',
      team: 'BullDogs',
      CoachId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Lebron James',
      position: 'QB',
      team: 'BullDogs',
      CoachId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Allen Fiverson',
      position: 'RB',
      team: 'BullDogs',
      CoachId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Shaq Dawson',
      position: 'WR',
      team: 'BullDogs',
      CoachId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Phil Dawl',
      position: 'WR',
      team: 'BullDogs',
      CoachId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Heid Worths',
      position: 'WR',
      team: 'BullDogs',
      CoachId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Deandre Swift',
      position: 'TE',
      team: 'BullDogs',
      CoachId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Cafe Sooner',
      position: 'Snapper',
      team: 'BullDogs',
      CoachId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      name: 'Jefe George',
      position: 'TE',
      team: 'BullDogs',
      CoachId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
    name: 'Jim Taylor',
    position: 'QB',
    team: 'Tigers',
    CoachId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'Jim Brown',
    position: 'RB',
    team: 'Tigers',
    CoachId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'Randy Floss',
    position: 'WR',
    team: 'Tigers',
    CoachId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'Deshaun Wackson',
    position: 'WR',
    team: 'Tigers',
    CoachId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'Randall Cobbs',
    position: 'WR',
    team: 'Tigers',
    CoachId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'Haha clyde',
    position: 'Snapper',
    team: 'Tigers',
    CoachId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'Kevin Mass',
    position: 'QB',
    team: 'Tigers',
    CoachId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'Nick Harnett',
    position: 'RB',
    team: 'Tigers',
    CoachId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'Jordy Kelson',
    position: 'WR',
    team: 'Tigers',
    CoachId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'Donald Driver',
    position: 'WR',
    team: 'Tigers',
    CoachId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'Vince Hombardi',
    position: 'WR',
    team: 'Tigers',
    CoachId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'James Sparks',
    position: 'TE',
    team: 'Tigers',
    CoachId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'Charles Footson',
    position: 'Snapper',
    team: 'Tigers',
    CoachId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
},{
    name: 'Colt Mchoy',
    position: 'TE',
    team: 'Tigers',
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
    return queryInterface.bulkDelete('Players', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

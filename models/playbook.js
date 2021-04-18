'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playbook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Playbook.belongsTo(models.Team)
      Playbook.belongsTo(models.Coach)
    }
  };
  Playbook.init({
    name: DataTypes.STRING,
    chart: DataTypes.JSONB,
    TeamId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Playbook',
  });
  return Playbook;
};
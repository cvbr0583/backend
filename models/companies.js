'use strict';
module.exports = (sequelize, DataTypes) => {
  const companies = sequelize.define('companies', {
    name: { type: DataTypes.STRING, required: true },
    address: { type: DataTypes.TEXT, required: true }
  }, {});
  companies.associate = function (models) {
    // associations can be defined here
    companies.hasMany(models.employees)
  };
  return companies;
};
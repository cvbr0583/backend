'use strict';
module.exports = (sequelize, DataTypes) => {
  const employees = sequelize.define('employees', {
    name: { type: DataTypes.STRING, required: true },
    fatherName: { type: DataTypes.STRING, required: true },
    motherName: { type: DataTypes.STRING, required: true },
    sex: { type: DataTypes.STRING, required: true },
    spouseName: { type: DataTypes.STRING, required: false },
    pincode: { type: DataTypes.STRING, required: true },
    area: { type: DataTypes.STRING, required: true },
    city: { type: DataTypes.STRING, required: true },
    state: { type: DataTypes.STRING, required: true },
    country: { type: DataTypes.STRING, required: true },
    companyId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'companies',
        key: 'id'
      }
    },
  }, {});
  employees.associate = function (models) {
    // associations can be defined here
    employees.belongsTo(models.companies)
  };
  return employees;
};
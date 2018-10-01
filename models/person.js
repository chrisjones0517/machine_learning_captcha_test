'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    middle: DataTypes.STRING,
    licenseType: DataTypes.STRING,
    licenseNo: DataTypes.STRING,
    nameOnLicense: DataTypes.STRING,
    status: DataTypes.STRING,
    issueDate: DataTypes.STRING,
    expDate: DataTypes.STRING,
    compactStatus: DataTypes.STRING,
    discipline: DataTypes.STRING
  }, {});
  Person.associate = function(models) {
    // associations can be defined here
  };
  return Person;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const About = sequelize.define('About', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    detail: DataTypes.STRING,
    imagepath: DataTypes.TEXT
  }, {});
  About.associate = function(models) {
    // associations can be defined here
  };
  return About;
};
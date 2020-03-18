'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [
      {
        title: "Welcome to Vegefoods an eCommerce website",
        description: "Use fresh and healthy vegetables every day. That will help us have a better and healthier life. Come to our website!",
        imagepath: '/images/about.jpg'
      },
    ];

    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    })
      return queryInterface.bulkInsert('Abouts', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Abouts', null, {});
  }
};
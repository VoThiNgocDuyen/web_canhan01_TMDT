'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [
      {
        "userId": 2,
        "productId": 2,
        "rating": 4
      },
      {
        "userId": 4,
        "productId": 2,
        "rating": 5
      },
      {
        "userId": 7,
        "productId": 1,
        "rating": 4
      },
      {
        "userId": 9,
        "productId": 5,
        "rating": 4
      }
    ];

    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    })
      return queryInterface.bulkInsert('Reviews', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
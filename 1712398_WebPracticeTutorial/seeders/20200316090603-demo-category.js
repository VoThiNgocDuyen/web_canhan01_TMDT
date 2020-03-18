'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [{name:"Fruits", imagepath:'/images/category-1.jpg'},
    {name:"Vegetables", imagepath:'/images/category-2.jpg'},
    {name:"Juices", imagepath:'/images/category-3.jpg'},
    {name:"Dried", imagepath:'/images/category-4.jpg'}
  ];
  data.map(item => {
    item.createdAt = Sequelize.literal('NOW()');
    item.updatedAt = Sequelize.literal('NOW()');
    return item;
  })
    return queryInterface.bulkInsert('Categories', data, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Categories', null, {});
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [{
      "username": "pvan0",
      "password": "yZSFZugO6a",
      "fullname": "Phil Van Arsdall",
      "isAdmin": true
  }, {
      "username": "hryder1",
      "password": "aELlfU9L",
      "fullname": "Harris Ryder",
      "isAdmin": false
  }, {
      "username": "djamot2",
      "password": "MeUI2pWk4k",
      "fullname": "Danita Jamot",
      "isAdmin": true
  }, {
      "username": "felcum3",
      "password": "zD23XTCGD",
      "fullname": "Fabiano Elcum",
      "isAdmin": false
  }, {
      "username": "tcarruthers4",
      "password": "1iux19ZHkB",
      "fullname": "Tresa Carruthers",
      "isAdmin": true
  }, {
      "username": "ahucklesby5",
      "password": "FzvDFDXlUFqg",
      "fullname": "Annie Hucklesby",
      "isAdmin": false
  }, {
      "username": "easty6",
      "password": "lfe3mtOmvG",
      "fullname": "Estella Asty",
      "isAdmin": false
  }, {
      "username": "dhutton7",
      "password": "pjdbSEt",
      "fullname": "Donna Hutton",
      "isAdmin": false
  }, {
      "username": "kornillos8",
      "password": "eXtwTLUi3",
      "fullname": "Katerina Ornillos",
      "isAdmin": false
  }, {
      "username": "dmalam9",
      "password": "DQC6yQ",
      "fullname": "Derry Malam",
      "isAdmin": false
  }];

    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    })
      return queryInterface.bulkInsert('Users', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [
      {
        name: "Bell Pepper",
        price: '79.99',
        summary: 'Bell peppers contain many healthy antioxidants, including capsanthin, violaxanthin, lutein, quercetin, and luteolin.',
        description: 'About: Bell Pepper are low in calories and exceptionally rich in vitamin C and other antioxidants, making them an excellent addition to a healthy diet.',
        availability: true,
        imagepath: '/images/product-1.jpg',
        thumbnailpath: '/images/product-1.jpg',
        categoryId: 2,
    },

{
        name: "Strawberry",
        price: '119.99',
        summary: 'Strawberries contain high amounts of beneficial plant compounds and antioxidants.',
        description: 'About: Strawberries are bright red, juicy, and sweet. They’re an excellent source of vitamin C and manganese and also contain decent amounts of folate (vitamin B9) and potassium.',
        availability: true,
        imagepath: '/images/product-2.jpg',
        thumbnailpath: '/images/product-2.jpg',
        categoryId: 1,
    },

{
        name: 'Tomatoes',
        price: '79.99',
        summary: 'Studies show that tomatoes and tomato products may reduce your risk of heart disease and several cancers.',
        description: 'About:Tomatoes are the major dietary source of the antioxidant lycopene, which has been linked to many health benefits, including reduced risk of heart disease and cancer.',
        availability: true,
        imagepath: '/images/product-5.jpg',
        thumbnailpath: '/images/product-5.jpg',
        categoryId: 2,
    },

{
        name: 'Apple',
        price: '52.99',
        summary: 'Some studies indicate that apples may help protect against diabetes, heart disease, and cancer.',
        description: 'About: Apples are high in fiber, vitamin C, and various antioxidants. They are also very filling, considering their low calorie count.',
        availability: true,
        imagepath: '/images/product-10.jpg',
        thumbnailpath: '/images/product-10.jpg',
        categoryId: 1,
    },

{
        name: 'Purple Cabbage',
        price: '119.99',
        summary: 'Purple cabbage is low in calories yet a good source of fiber and vitamins A, C, K, and B6.',
        description: 'About: Purple cabbage, also referred to as red cabbage, belongs to the Brassica genus of plants. This group includes nutrient-dense vegetables, such as broccoli, Brussels sprouts, and kale.',
        availability: true,
        imagepath: '/images/product-4.jpg',
        thumbnailpath: '/images/product-4.jpg',
        categoryId: 2,
    },

{
        name: 'Green Beans',
        price: '119.99',
        summary: 'Beans are nutrient dense with high fiber and starch contents. ',
        description: 'About: Green beans, also called snap beans or string beans, are a staple in many kitchens across the United States.',
        availability: true,
        imagepath: '/images/product-3.jpg',
        thumbnailpath: '/images/product-3.jpg',
        categoryId: 2,
    },

{
        name: 'Broccoli',
        price: '119.99',
        summary: 'Broccoli’s isothiocyanates may improve many risk factors for disease and reduce your risk of cancer.',
        description: 'About: Broccoli (Brassica oleracea) is a cruciferous vegetable related to cabbage, kale, cauliflower, and Brussels sprouts.',
        availability: true,
        imagepath: '/images/product-6.jpg',
        thumbnailpath: '/images/product-6.jpg',
        categoryId: 2,
    },

{
        name: 'Carrot',
        price: '119.99',
        summary: 'Eating carrots is linked to a reduced risk of cancer and heart disease, as well as improved eye health.',
        description: 'About:It is crunchy, tasty, and highly nutritious. Carrots are a particularly good source of beta carotene, fiber, vitamin K1, potassium, and antioxidants.',
        availability: true,
        imagepath: '/images/product-7.jpg',
        thumbnailpath: '/images/product-7.jpg',
        categoryId: 2,
    },



{
        name: 'Apple Juice',
        price: '61.99',
        summary: 'Apple juice refreshes your body, helps protecting your brain as you age, and support your heart health',
        description: 'About:No artificial sweeteners Juice from real Apples 100% Natural Ingredients No preservatives',
        availability: true,
        imagepath: '/images/AppleJuice.jpg',
        thumbnailpath: '/images/AppleJuice.jpg',
        categoryId: 3,
    },

{
        name: 'Pineapple Juice',
        price: '63.99',
        summary: 'Pineapple Juice have several different benefits.',
        description: 'About: No additional Sugar Real Pineapple Juice. 100% Natural Ingredients. No preservatives',
        availability: true,
        imagepath: '/images/PineappleJuice.jpg',
        thumbnailpath: '/images/PineappleJuice.jpg',
        categoryId: 3,
    },

{
        name: 'Carrot Juice',
        price: '60.99',
        summary: 'Carrot juice has a huge number of benefits.',
        description: 'About: Carrots are an excellent source of vitamins, nutrients, and fiber.',
        availability: true,
        imagepath: '/images/CarrotJuice.jpg',
        thumbnailpath: '/images/CarrotJuice.jpg',
        categoryId: 3
    },

{
        name: 'Orange Juice',
        price: '57.99',
        summary: 'Drinking orange juice everyday helps you to improve your immune system against some sicks such as cold and flu by giving your body daily needed vitamin C',
        description: 'About: Orange Juice is naturally high in vital nutrients, such as vitamin C and potassium. Plus, commercial varieties are often enriched with calcium and vitamin D.',
        availability: true,
        imagepath: '/images/OrangeJuice.jpg',
        thumbnailpath: '/images/OrangeJuice.jpg',
        categoryId: 3
    },

{
        name: 'Chestnut',
        price: '30.99',
        summary: 'Chestnuts are rich sources of minerals, vitamins, and phytonutrients that immensely benefit health.',
        description: 'About: Chestnuts are the edible nuts of Chestnut trees (Castanea sativa).',
        availability: true,
        imagepath: '/images/chestnut.jpg',
        thumbnailpath: '/images/chestnut.jpg',
        categoryId: 4,
    },

{
        name: 'Almonds',
        price: '29.99',
        summary: 'Almonds are highly nutritious and rich in healthy fats, antioxidants, vitamins, and minerals.',
        description: 'About: People can eat almonds raw or toasted as a snack or add them to sweet or savory dishes.',
        availability: true,
        imagepath: '/images/Almonds.jpg',
        thumbnailpath: '/images/Almonds.jpg',
        categoryId: 4,
    },

{
        name: 'Walnuts',
        price: '40.99',
        summary: 'Walnuts is a healthy item that you can eat daily without thinking overwhelm of its nutrition.',
        description: 'About: Walnuts are rich in omega-3 fats and contain higher amounts of antioxidants than most other foods.',
        availability: true,
        imagepath: '/images/Walnuts.jpg',
        thumbnailpath: '/images/Walnuts.jpg',
        categoryId: 4,
    },

{
        name: 'Hazelnuts',
        price: '25.99',
        summary: 'Hazelnuts may increase oxidative capacity and reduce blood lipid levels, which can help reduce the risk of heart disease.',
        description: 'About: The hazelnut, also known as the filbert, is a type of nut that comes from the Corylus tree. It is mostly cultivated in Turkey, Italy, Spain and the United States.',
        availability: true,
        imagepath: '/images/Hazelnuts.jpg',
        thumbnailpath: '/images/Hazelnuts.jpg',
        categoryId: 4,
    }
];

    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    })
      return queryInterface.bulkInsert('Products', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};

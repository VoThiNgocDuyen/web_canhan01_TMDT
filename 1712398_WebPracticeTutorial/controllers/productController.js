let controller = {};
let models = require('../models');
let Product = models.Product;

controller.getOurProduct = () =>{
    return new Promise((resolve, reject)=>{
        Product
            .findAll({
                order: [
                    ['id']
                ],
                limit: 8,
                attributes: ['id', 'name', 'imagepath', 'price']
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

controller.getAll = (query) =>{
    return new Promise((resolve, reject)=>{
        let options = {
            include: [{model: models.Category}],
            attributes: ['id', 'name', 'imagepath', 'price'],
            where: {}
        };
        if (query.category){
            options.where.categoryId = query.category;
        }
        Product
            .findAll(options)
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

controller.getById = (id) =>{
    return new Promise((resolve, reject)=>{
        Product
            .findOne({
                where: {id: id}
            })
            .then(result => resolve(result))
            .catch(error => reject(new Error(error)));
    });
};

module.exports = controller;
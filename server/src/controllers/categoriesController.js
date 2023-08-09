const { categories } = require('../db.js');

const allcategories = async() => {
    const cat = await categories.findAll()
    return cat;
}

const postCategory = async(name) => {
    const newCategory = await categories.create({name});
    return newCategory;
}

module.exports = {
    allcategories,
    postCategory
}
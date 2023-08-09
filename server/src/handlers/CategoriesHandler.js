const {allcategories, postCategory} = require('../controllers/categoriesController')


const getCategoriesHandler = async(req, res) => {
    try {

        const categories = await allcategories();
        res.status(200).json(categories)

    } catch (error) {
        res.status(500).json({ error: error.message })

    }
}

const addCategoriesHandler = async (req, res) => {
    const {name} = req.body
    
    try {
        const newCategory = await postCategory(name);
        res.status(201).json(newCategory)

    } catch (error) {

        res.status(500).json({ error: error.message })

    }

};

module.exports = {
    getCategoriesHandler,
    addCategoriesHandler
}
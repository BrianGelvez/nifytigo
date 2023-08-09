const { Router } = require("express");

const router = Router();

const { getCategoriesHandler, addCategoriesHandler }= require('../handlers/CategoriesHandler')


router
.get('/', getCategoriesHandler)
.post('/', addCategoriesHandler)

module.exports = router;
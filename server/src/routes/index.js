const { Router } = require("express");
const router = Router();

const usersRoutes = require('./usersRoutes')
const nftRoutes = require('./nftRoutes')
const categoriesRoutes = require('./categoriesRoutes')
//const videoGamesRouter = require("./videoGamesRouter")

router.use('/users', usersRoutes)
router.use('/nft', nftRoutes)
router.use('/categories', categoriesRoutes)
//router.use('/videogames', videoGamesRouter)


module.exports = router;

//Buscar por Id y por nombre los users. eso

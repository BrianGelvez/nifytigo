const { Router } = require("express");
const router = Router();
const usersRoutes = require('./usersRoutes')



router.use('/users', usersRoutes)


module.exports = router;

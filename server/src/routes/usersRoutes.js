const { Router } = require("express");

const router = Router();

const {
    getUsersHandler,
    createUsersHandler,
    getUserNameHandler,
    getUserIdHandler,
    updateUserHandler
}= require('../handlers/usersHandler')


router
.get('/all', getUsersHandler)
.get('/username', getUserNameHandler)
.get('/:id', getUserIdHandler)
.post('/', createUsersHandler)
.put('/update/:id', updateUserHandler)

module.exports = router;

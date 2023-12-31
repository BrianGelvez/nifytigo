const { allUsers, createUser, findUserName, getUserId, updateUser } = require('../controllers/userController')
const WelcomeEmail = require('../nodemailer/userNodemailer');

const getUsersHandler = async (req, res) => {

    try {
        const results = await allUsers()
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



const createUsersHandler = async (req, res) => {

    const { username, name, lastName, email, password, cellPhone, country } = req.body
    try {

        const newUser = await createUser(username, name, lastName, email, password, cellPhone, country)
        const userEmail = newUser.email
        await WelcomeEmail(userEmail)

        res.status(200).json(newUser)
    } catch (error) {
        res.status(400).json({ error: error.message = 'No se creo el usuario' })
    }
}

const getUserNameHandler = async (req, res) => {
    const { username, password } = req.method === 'GET' ? req.query : req.body;
  
    try {
      const isAuthenticated = await findUserName(username, password);
  
      if (isAuthenticated) {
        res.status(200).json({ authenticated: true });
      } else {
        res.status(401).json({ authenticated: false });
      }
    } catch (error) {
      res.status(401).json({ authenticated: false, error: error.message });
    }
  };

const getUserIdHandler = async (req, res) => {
    const { id } = req.params
    try {
        const user = await getUserId(id);
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar el usuario' });
    }
}

const updateUserHandler = async (req, res) => {
    try {
        const { id } = req.params
        const { username, name, lastName, email, password, cellPhone, country } = req.body
        const user = await updateUser(id, username, name, lastName, email, password, cellPhone, country);
        return res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: 'No se pudo actualizar el Usuario' });
    }
}


module.exports = {
    getUsersHandler,
    createUsersHandler,
    getUserNameHandler,
    getUserIdHandler,
    updateUserHandler
}
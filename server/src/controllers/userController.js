const { users } = require('../db')


const allUsers = async () => {
    const allusersDb = users.findAll()
    return allusersDb
}

const createUser = async (username, name, lastName, email, password, cellPhone, country) => {
    const newUser = await users.create({ username, name, lastName, email, password, cellPhone, country })
    return newUser
}

const getUserId = async (id) => {
    const user = await users.findByPk(id);
    return user;
}

const findUserName = async (username, password) => {

    const exist = await users.findOne({ where: { username: username } });
    if (exist) {
        if(exist.password === password) {
            login = true;
            return login;
        }else{
            login = false;
            throw Error(`Contraseña Incorrecta`);
        }
    }else{
        login = false;
        throw Error(`Usuario Incorrecto`);
    }

};

const updateUser = async (id, username, name, lastName, email, password, cellPhone, country) => {

    const userUp = await users.findByPk(id);

    if(userUp.username !== username){
        await users.update({ username: username},
            {where: {
                username: userUp.username
            }
          })
    }
    if (userUp.name !== name) {
        await users.update({ name: name },
            {where: {
                name: userUp.name
            }
          })
    }
    
    if (userUp.lastName !== lastName) {
        await  users.update({ lastName: lastName },
            {where: {
              lastName: userUp.lastName
            }
          })
    }
    
    if (userUp.email !== email) {
        await users.update({ email: email },
            {where: {
                email: userUp.email
            }
          })
    }
    
    if (userUp.password !== password) {
        await users.update({ password: password },
            {where: {
                password: userUp.password
            }
          })
    }
    
    if (userUp.cellPhone !== cellPhone) {
        await  users.update({ cellPhone: cellPhone },
            {where: {
                cellPhone: userUp.cellPhone
            }
          })
    }
    
    if (userUp.country !== country) {
        await users.update({ country: country },
            {where: {
                country: userUp.country
            }
          })
    }

    const newUserUp = await users.findByPk(id);
    return newUserUp
};


module.exports = { allUsers, createUser, findUserName, getUserId, updateUser }

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('nfts', {
        id: {
            type: DataTypes.UUID, // genera un id mas largo, ocupa mas espacio en la BDD pero es mas seguro, sin colisiones
            defaultValue: DataTypes.UUIDV4, // Genera automáticamente un UUID único
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        image: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2), // Tipo de dato para almacenar precios en formato decimal (10 dígitos enteros y 2 decimales)
            allowNull: false,
            defaultValue: 0.00,  // podemos establecer un valor predeterminado
        },
    },{timestamps:false});
};


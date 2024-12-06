const {DataTypes} = require('sequelize');
const { sequelize } = require('.');

module.exports = (sequelize) => {
    return sequelize.define('Client', {
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        cpf:{
            type: DataTypes.STRING,
            allowNull: false
        },
        celNumber:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: true
        }
    });
};
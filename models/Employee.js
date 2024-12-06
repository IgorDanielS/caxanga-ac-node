const {DataTypes} = require('sequelize');
const { sequelize } = require('.');

module.exports = (sequelize) => {
    return sequelize.define('Employee', {
        cpf:{
            type: DataTypes.STRING,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        telefone:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};
const {DataTypes} = require('sequelize');
const { sequelize } = require('.');

module.exports = (sequelize) => {
    return sequelize.define('Enterprise', {
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        cnpj:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};
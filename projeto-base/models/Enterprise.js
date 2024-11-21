const {DataTypes} = require('sequelize');
const { sequelize } = require('.');

module.exports = (sequelize) => {
    return sequelize.define('Enterprise', {
        cnpj:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};
const {DataTypes} = require('sequelize');
const { sequelize } = require('.');

module.exports = (sequelize) => {
    return sequelize.define('Vehicle', {
        plate:{
            type: DataTypes.STRING,
            allowNull: false
        },
        model:{
            type: DataTypes.STRING,
            allowNull: false
        },
        automaker:{
            type: DataTypes.STRING,
            allowNull: false
        },
        age:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        color:{
            type: DataTypes.STRING,
            allowNull: false
        }

    });
};
const {DataTypes} = require('sequelize');
const { sequelize } = require('.');

module.exports = (sequelize) => {
    return sequelize.define('Appointment', {
        
        data: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        concluido: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descricao: {
            type: DataTypes.STRING,
        },
    })
}
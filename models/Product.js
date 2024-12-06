const {DataTypes} = require('sequelize');
const { sequelize } = require('.');

module.exports = (sequelize) => {
    return sequelize.define('Product', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: true
        },
        codigoBarras: {
            type: DataTypes.STRING,
            allowNull: true
        },
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        preco: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        tipoProduto: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
};

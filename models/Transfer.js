const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Transfer = sequelize.define('Transfer', {
        dataEntrada: {
            type: DataTypes.DATE,
            allowNull: false
        },
        dataSaida: {
            type: DataTypes.DATE,
            allowNull: false
        },
        quantidadeTransferencia: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Transfer.associate = (models) => {
        Transfer.hasMany(models.Product, {
            foreignKey: 'transferId',
            as: 'products'
        });
    };

    return Transfer;
};

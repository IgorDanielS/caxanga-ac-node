const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Stock = sequelize.define('Stock', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
    });

    //Relacionamento com produto
    Stock.associate = (models) => {
        Stock.hasMany(models.Product, {
            foreignKey: 'stockId',
            as: 'products',
        });
        
    //Relacionamento com empresa
        Stock.belongsTo(models.Enterprise, {
            foreignKey: {
                name: 'enterpriseId',
                allowNull: false,
            },
            as: 'enterprise',
        });
    };

    return Stock;
};

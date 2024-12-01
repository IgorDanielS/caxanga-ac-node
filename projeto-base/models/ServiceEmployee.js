const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const ServiceEmployee = sequelize.define('ServiceEmployee', {
        startDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        serviceId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Services', // O nome da tabela
                key: 'id', // A chave primária do modelo Service
            },
        },
        employeeId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Employees', // O nome da tabela
                key: 'id', // A chave primária do modelo Employee
            },
        },
    });

    return ServiceEmployee;
};

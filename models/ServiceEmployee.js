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
                model: 'Services', 
                key: 'id', 
            },
        },
        employeeId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Employees', 
                key: 'id', 
            },
        },
    });

    return ServiceEmployee;
};

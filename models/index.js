const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

const Address = require('./Address')(sequelize);
const Client = require('./Client')(sequelize);
const Employee = require('./Employee')(sequelize);
const Enterprise = require('./Enterprise')(sequelize);
const Appointment = require('./Appointment')(sequelize);
const Vehicle = require('./Vehicle')(sequelize);
const Product = require('./Product')(sequelize);
const Transfer = require('./Transfer')(sequelize);
const Service = require('./Service')(sequelize);
const ServiceEmployee = require('./ServiceEmployee')(sequelize);
const Stock = require('./Stock')(sequelize);


Address.hasMany(Client,{
    foreignKey: 'addressId',
    as: "clients",
});
Client.belongsTo(Address,{
    foreignKey: 'addressId',
    as: "address"
});

Address.hasMany(Enterprise,{
  foreignKey: 'addressId',
  as: "enterprise",
});
Enterprise.belongsTo(Address,{
  foreignKey: 'addressId',
  as: "address"
});

Enterprise.hasMany(Employee,{
  foreignKey: 'enterpriseId',
  as: "employees"
});
Employee.belongsTo(Enterprise,{
  foreignKey: "enterpriseId",
  as: "enterprise"
});

Enterprise.hasMany(Client,{
  foreignKey: 'enterpriseId',
  as: "clients"
});
Client.belongsTo(Enterprise,{
  foreignKey: 'enterpriseId',
  as: "enterprise"
});

Vehicle.belongsTo(Client, {
  foreignKey: 'clientId',
  as: 'client'
});

Appointment.belongsTo(Client, {
  foreignKey: 'clientId',
  as: 'client',
});

Transfer.hasMany(Product, {
  foreignKey: 'transferId', 
  as: 'products', 
});

Product.belongsTo(Transfer, {
  foreignKey: 'transferId',
  as: 'transfer',
});

Service.belongsToMany(Employee,{
  through: 'ServiceEmployee',
  foreignKey: 'serviceId',
  otherKey: 'employeeId',
});

Employee.belongsToMany(Service,{
  through: 'ServiceEmployee',
  foreignKey: 'employeeId',
  otherKey: 'serviceId',
});

Stock.hasMany(Product,{
  foreignKey: 'transferId',
  as: 'products',
});
Stock.belongsTo(Enterprise,{
  foreignKey: 'enterpriseId',
  as: 'enterprise',
});

sequelize.sync( {force: true})
.then(() => console.log('Database synced'))
.catch(err => console.error('Error syncing database:', err));

module.exports = { sequelize, Address, Client, Employee, Enterprise, Appointment, Vehicle, Transfer, Product, Service, Stock };

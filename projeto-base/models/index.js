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

Appointment.belongsTo(Client, {
  foreignKey: 'clientId',
  as: 'client',
});

sequelize.sync( {force: true})
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database:', err));

module.exports = { sequelize, Address, Client, Employee, Enterprise, Appointment };

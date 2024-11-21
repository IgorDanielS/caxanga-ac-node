const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

const Address = require('./Address')(sequelize);
const Client = require('./Client')(sequelize);
const Employee = require('./Employee')(sequelize);
const Enterprise = require('./Enterprise')(sequelize)

Address.hasMany(Client,{
    foreignKey: 'addressId',
    as: "clients",
});
Client.belongsTo('Address',{
    foreignKey: 'addressId',
    as: "address"
});

Address.hasMany(Enterprise,{
  foreignKey: 'addressId',
  as: "enterprise",
});
Enterprise.belongsTo('Address',{
  foreignKey: 'addressId',
  as: "address"
});



sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database:', err));

module.exports = { sequelize, Address, Client, Employee, Enterprise };

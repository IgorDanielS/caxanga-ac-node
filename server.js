const express = require('express');
const bodyParser = require('body-parser');
const addressController = require('./controllers/AddressController');
const clientController = require('./controllers/ClientController');
const enterpriseController = require('./controllers/EnterpriseController');
const employeeController = require('./controllers/EmployeeController');
const appointmentController = require('./controllers/AppointmentController');
const vehicleController = require('./controllers/VehicleController');
const productController = require('./controllers/ProductController');
const transferController = require('./controllers/TransferController');
const serviceController = require('./controllers/ServiceController');
const serviceEmployeeController = require('./controllers/serviceEmployeeController');
const stockController = require('./controllers/StockController');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//ENDPOINT'S DE ADDRESS
app.post('/address', addressController.create);
app.get('/address', addressController.findAll);
app.get('/address/:id', addressController.findOne);
app.put('/address/:id', addressController.update);
app.delete('/address/:id', addressController.delete);


//ENDPOINT'S DE CLIENTE
app.post('/client/:addressId', clientController.create);
app.get('/client', clientController.findAll);
app.get('/client/:id', clientController.findOne);
app.put('/client/:id', clientController.update);
app.delete('/client/:id', clientController.delete);

//ENDPOINT'S DE ENTERPRISE
app.post('/enterprise/:addressId', enterpriseController.create);
app.get('/enterprise', enterpriseController.findAll);
app.get('/enterprise/:id', enterpriseController.findOne);
app.put('/enterprise/:id', enterpriseController.update);
app.delete('/enterprise/:id', enterpriseController.delete);


//ENDPOINT'S DE EMPLOYEE
app.post('/employee/:enterpriseId', employeeController.create);
app.get('/employee', employeeController.findAll);
app.get('/employee/:id', employeeController.findOne);
app.put('/employee/:id', employeeController.update);
app.delete('/employee/:id', employeeController.delete);


//ENDPOINT'S DE appointment
app.post('/appointment/:clientId', appointmentController.create);
app.get('/appointment', appointmentController.findAll);
app.get('/appointment/:id', appointmentController.findOne);
app.put('/appointment/:id', appointmentController.update);
app.delete('/appointment/:id', appointmentController.delete);


//ENDPOINT'S VEHICLE
app.post('/vehicle/:clientId', vehicleController.create);
app.get('/vehicle', vehicleController.findAll);
app.get('/vehicle/:id', vehicleController.findOne);
app.put('/vehicle/:id', vehicleController.update);
app.delete('/vehicle/:id', vehicleController.delete);


//ENDPOINT'S DE PRODUCT
app.post('/product', productController.create);
app.get('/product', productController.findAll);
app.get('/product/:id', productController.findOne);
app.put('/product/:id', productController.update);
app.delete('/product/:id', productController.delete);


// ENDPOINTS DE TRANSFER
app.post('/transfer', transferController.create);
app.get('/transfer', transferController.findAll);
app.get('/transfer/:id', transferController.findOne);
app.put('/transfer/:id', transferController.update);
app.delete('/transfer/:id', transferController.delete);


//ENDPOINTS SERVICE
app.post('/service', serviceController.create);
app.get('/service', serviceController.findAll);
app.get('/service/:id', serviceController.findOne);
app.put('/service/:id', serviceController.update);
app.delete('/service/:id', serviceController.delete);


//ENDPOINT SERVICEEMPLOYEE
app.post('/service/:serviceId/employee/:employeeId', serviceEmployeeController.addEmployeeToService);
app.delete('/service/:serviceId/employee/:employeeId', serviceEmployeeController.removeEmployeeFromService);
app.get('/service/:serviceId/employees', serviceEmployeeController.getEmployeesOfService);
app.get('/employee/:employeeId/services', serviceEmployeeController.getServicesOfEmployee);


// ENDPOINT DE STOCK
app.post('/stock', stockController.createStock);
app.get('/stock', stockController.getAllStocks);
app.get('/stock/:id', stockController.getStockById);
app.put('/stock/:id', stockController.updateStock);
app.delete('/stock/:id', stockController.deleteStock);

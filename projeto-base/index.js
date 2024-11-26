const express = require('express');
const bodyParser = require('body-parser');
const {Address, Client, Employee, Enterprise, Appointment, Vehicle, sequelize} = require('./models');

const app = express();
app.use(bodyParser.json());


//ENDPOINT'S DE ADDRESS
app.post('/address', async (req, res) => {
  try {
    const address = await Address.create(req.body);
    res.status(201).json(address);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/address/', async(req, res) => {
  try {
    const address = await Address.findAll();
    res.json(address);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});
app.get('/address/:id', async (req, res) => {
  try {
    const address = await Address.findByPk(req.params.id);
    if (address) {
      res.json(address);
    } else {
      res.status(404).json({ error: 'Address not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/address/:id', async (req, res) => {
  try {
    const address = await Address.findByPk(req.params.id);
    if (address) {
      await address.update(req.body);
      res.json(address);
    } else {
      res.status(404).json({ error: 'Address not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/address/:id', async (req, res) => {
  try {
    const address = await Address.findByPk(req.params.id);
    if (address) {
      await address.destroy();
      res.json({ message: 'Address deleted' });
    } else {
      res.status(404).json({ error: 'Address not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//ENDPOINT'S DE CLIENTE
app.post('/client/:addressId', async (req, res) => {
  try {
    const address = await Address.findByPk(req.params.addressId);
    if (address) {
      const client = await Client.create({ ...req.body, addressId :address.id });
      res.status(201).json(client);
    } else {
      res.status(404).json({ error: 'Address not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/client', async (req, res) => {
    try {
      const client = await Client.findAll();
      res.json(client);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  
app.get('/client/:id', async (req, res) => {
    try {
      const client = await Client.findByPk(req.params.id);
      if (client) {
        res.json(client);
      } else {
        res.status(404).json({ error: 'Client not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  
app.put('/client/:id', async (req, res) => {
    try {
      const client = await Client.findByPk(req.params.id);
      if (client) {
        await client.update(req.body);
        res.json(client);
      } else {
        res.status(404).json({ error: 'Client not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});
  
app.delete('/client/:id', async (req, res) => {
    try {
      const client = await Client.findByPk(req.params.id);
      if (client) {
        await client.destroy();
        res.json({ message: 'Client deleted' });
      } else {
        res.status(404).json({ error: 'Client not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

//ENDPOINT'S DE ENTERPRISE
app.post('/enterprise/:addressId', async (req, res) => {
  try {
    const address = await Address.findByPk(req.params.addressId);
    if (address) {
      const enterprise = await Enterprise.create({ ...req.body, addressId :address.id });
      res.status(201).json(enterprise);
    } else {
      res.status(404).json({ error: 'Address not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/enterprise', async (req, res) => {
    try {
      const enterprise = await Enterprise.findAll();
      res.json(enterprise);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  
app.get('/enterprise/:id', async (req, res) => {
    try {
      const enterprise = await Enterprise.findByPk(req.params.id);
      if (enterprise) {
        res.json(enterprise);
      } else {
        res.status(404).json({ error: 'Enterprise not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  
app.put('/enterprise/:id', async (req, res) => {
    try {
      const enterprise = await Enterprise.findByPk(req.params.id);
      if (enterprise) {
        await enterprise.update(req.body);
        res.json(enterprise);
      } else {
        res.status(404).json({ error: 'Enterprise not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});
  
app.delete('/enterprise/:id', async (req, res) => {
    try {
      const enterprise = await Enterprise.findByPk(req.params.id);
      if (enterprise) {
        await enterprise.destroy();
        res.json({ message: 'Enterprise deleted' });
      } else {
        res.status(404).json({ error: 'Client not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

//ENDPOINT'S DE EMPLOYEE
app.post('/employee/:enterpriseId', async (req, res) => {
  try {
    const enterprise = await Enterprise.findByPk(req.params.enterpriseId);
    if (enterprise) {
      const employee = await Employee.create({ ...req.body, enterpriseId :enterprise.id });
      res.status(201).json(employee);
    } else {
      res.status(404).json({ error: 'Enterprise not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/employee', async (req, res) => {
    try {
      const employee = await Employee.findAll();
      res.json(employee);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  
app.get('/employee/:id', async (req, res) => {
    try {
      const employee = await Employee.findByPk(req.params.id);
      if (employee) {
        res.json(employee);
      } else {
        res.status(404).json({ error: 'Employee not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  
app.put('/employee/:id', async (req, res) => {
    try {
      const employee = await Employee.findByPk(req.params.id);
      if (employee) {
        await employee.update(req.body);
        res.json(employee);
      } else {
        res.status(404).json({ error: 'Employee not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});
  
app.delete('/employee/:id', async (req, res) => {
    try {
      const employee = await Employee.findByPk(req.params.id);
      if (employee) {
        await employee.destroy();
        res.json({ message: 'Employee deleted' });
      } else {
        res.status(404).json({ error: 'Employee not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

//ENDPOINT'S DE appointment

app.post('/appointment/:clientId', async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.clientId);
    if (client) {
      const appointment = await Appointment.create({ ...req.body, clientId :client.id });
      res.status(201).json(appointment);
    } else {
      res.status(404).json({ error: 'Client not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/appointment', async (req, res) => {
  try {
    const appointment = await Appointment.findAll({
      include: ['client'],
    });
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.get('/appointment/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findByPk(req.params.id);
    if (appointment) {
      res.json(appointment);
    } else {
      res.status(404).json({ error: 'Appointment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/appointment/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findByPk(req.params.id);
    if (appointment) {
      await appointment.update(req.body);
      res.json(appointment);
    } else {
      res.status(404).json({ error: 'Appointment not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/appointment/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findByPk(req.params.id);
    if (appointment) {
      await appointment.destroy();
      res.json({ message: 'Appointment deleted' });
    } else {
      res.status(404).json({ error: 'Appointment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});





//ENDPOINT'S VEHICLE
app.post('/vehicle/:clientId', async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.clientId);
    if (client) {
      const vehicle = await Vehicle.create({ ...req.body, clientId :client.id });
      res.status(201).json(vehicle);
    } else {
      res.status(404).json({ error: 'vehicle not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/vehicle', async (req, res) => {
    try {
      const vehicle = await Vehicle.findAll();
      res.json(vehicle);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  
app.get('/vehicle/:id', async (req, res) => {
    try {
      const vehicle = await Vehicle.findByPk(req.params.id);
      if (vehicle) {
        res.json(vehicle);
      } else {
        res.status(404).json({ error: 'vehicle not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  
app.put('/vehicle/:id', async (req, res) => {
    try {
      const vehicle = await Vehicle.findByPk(req.params.id);
      if (vehicle) {
        await vehicle.update(req.body);
        res.json(vehicle);
      } else {
        res.status(404).json({ error: 'vehicle not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});
  
app.delete('/vehicle/:id', async (req, res) => {
    try {
      const vehicle = await Vehicle.findByPk(req.params.id);
      if (vehicle) {
        await vehicle.destroy();
        res.json({ message: 'vehicle deleted' });
      } else {
        res.status(404).json({ error: 'vehicle not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});



//ENDPOINT'S DE PRODUCT
app.post('/product', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/product', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/product/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/product/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      await product.update(req.body);
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/product/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      await product.destroy();
      res.json({ message: 'Product deleted' });
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

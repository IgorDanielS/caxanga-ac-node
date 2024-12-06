const { Vehicle, Client } = require('../models');

module.exports = {
  create: async (req, res) => {
    try {
      const client = await Client.findByPk(req.params.clientId);
      if (client) {
        const vehicle = await Vehicle.create({ ...req.body, clientId: client.id });
        res.status(201).json(vehicle);
      } else {
        res.status(404).json({ error: 'Client not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  findAll: async (req, res) => {
    try {
      const vehicles = await Vehicle.findAll();
      res.json(vehicles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  findOne: async (req, res) => {
    try {
      const vehicle = await Vehicle.findByPk(req.params.id);
      if (vehicle) {
        res.json(vehicle);
      } else {
        res.status(404).json({ error: 'Vehicle not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const vehicle = await Vehicle.findByPk(req.params.id);
      if (vehicle) {
        await vehicle.update(req.body);
        res.json(vehicle);
      } else {
        res.status(404).json({ error: 'Vehicle not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const vehicle = await Vehicle.findByPk(req.params.id);
      if (vehicle) {
        await vehicle.destroy();
        res.json({ message: 'Vehicle deleted' });
      } else {
        res.status(404).json({ error: 'Vehicle not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

const { Service } = require('../models');

module.exports = {
  create: async (req, res) => {
    try {
      const service = await Service.create(req.body);
      res.status(201).json(service);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  findAll: async (req, res) => {
    try {
      const services = await Service.findAll();
      res.json(services);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  findOne: async (req, res) => {
    try {
      const service = await Service.findByPk(req.params.id);
      if (service) {
        res.json(service);
      } else {
        res.status(404).json({ error: 'Service not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const service = await Service.findByPk(req.params.id);
      if (service) {
        await service.update(req.body);
        res.json(service);
      } else {
        res.status(404).json({ error: 'Service not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const service = await Service.findByPk(req.params.id);
      if (service) {
        await service.destroy();
        res.json({ message: 'Service deleted' });
      } else {
        res.status(404).json({ error: 'Service not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

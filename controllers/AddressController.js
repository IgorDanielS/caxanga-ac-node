const { Address } = require('../models');

module.exports = {
  create: async (req, res) => {
    try {
      const address = await Address.create(req.body);
      res.status(201).json(address);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  findAll: async (req, res) => {
    try {
      const addresses = await Address.findAll();
      res.json(addresses);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  findOne: async (req, res) => {
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
  },

  update: async (req, res) => {
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
  },

  delete: async (req, res) => {
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
  },
};

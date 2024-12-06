const { Enterprise, Address } = require('../models');

module.exports = {
  create: async (req, res) => {
    try {
      const address = await Address.findByPk(req.params.addressId);
      if (address) {
        const enterprise = await Enterprise.create({ ...req.body, addressId: address.id });
        res.status(201).json(enterprise);
      } else {
        res.status(404).json({ error: 'Address not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  findAll: async (req, res) => {
    try {
      const enterprises = await Enterprise.findAll();
      res.json(enterprises);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  findOne: async (req, res) => {
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
  },

  update: async (req, res) => {
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
  },

  delete: async (req, res) => {
    try {
      const enterprise = await Enterprise.findByPk(req.params.id);
      if (enterprise) {
        await enterprise.destroy();
        res.json({ message: 'Enterprise deleted' });
      } else {
        res.status(404).json({ error: 'Enterprise not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

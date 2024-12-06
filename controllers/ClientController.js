const { Client, Address } = require('../models');

module.exports = {
  create: async (req, res) => {
    try {
      const address = await Address.findByPk(req.params.addressId);
      if (address) {
        const client = await Client.create({ ...req.body, addressId: address.id });
        res.status(201).json(client);
      } else {
        res.status(404).json({ error: 'Address not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  findAll: async (req, res) => {
    try {
      const clients = await Client.findAll();
      res.json(clients);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  findOne: async (req, res) => {
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
  },

  update: async (req, res) => {
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
  },

  delete: async (req, res) => {
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
  },
};

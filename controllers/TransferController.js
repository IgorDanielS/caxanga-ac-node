const { Transfer, Product } = require('../models');

module.exports = {
  create: async (req, res) => {
    try {
      const transfer = await Transfer.create(req.body);
      res.status(201).json(transfer);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  findAll: async (req, res) => {
    try {
      const transfers = await Transfer.findAll({
        include: { model: Product, as: 'products' },
      });
      res.json(transfers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  findOne: async (req, res) => {
    try {
      const transfer = await Transfer.findByPk(req.params.id, {
        include: { model: Product, as: 'products' },
      });
      if (transfer) {
        res.json(transfer);
      } else {
        res.status(404).json({ error: 'Transfer not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const transfer = await Transfer.findByPk(req.params.id);
      if (transfer) {
        await transfer.update(req.body);
        res.json(transfer);
      } else {
        res.status(404).json({ error: 'Transfer not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const transfer = await Transfer.findByPk(req.params.id);
      if (transfer) {
        await transfer.destroy();
        res.json({ message: 'Transfer deleted' });
      } else {
        res.status(404).json({ error: 'Transfer not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

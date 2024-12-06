const { Stock } = require('../models');

module.exports = {
  createStock: async (req, res) => {
    try {
      const stock = await Stock.create(req.body);
      res.status(201).json(stock);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getAllStocks: async (req, res) => {
    try {
      const stocks = await Stock.findAll();
      res.json(stocks);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getStockById: async (req, res) => {
    try {
      const stock = await Stock.findByPk(req.params.id);
      if (stock) {
        res.json(stock);
      } else {
        res.status(404).json({ error: 'Stock not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateStock: async (req, res) => {
    try {
      const stock = await Stock.findByPk(req.params.id);
      if (stock) {
        await stock.update(req.body);
        res.json(stock);
      } else {
        res.status(404).json({ error: 'Stock not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  deleteStock: async (req, res) => {
    try {
      const stock = await Stock.findByPk(req.params.id);
      if (stock) {
        await stock.destroy();
        res.json({ message: 'Stock deleted' });
      } else {
        res.status(404).json({ error: 'Stock not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

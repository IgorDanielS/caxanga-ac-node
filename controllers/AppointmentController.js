const { Appointment, Client } = require('../models');

module.exports = {
  create: async (req, res) => {
    try {
      const client = await Client.findByPk(req.params.clientId);
      if (client) {
        const appointment = await Appointment.create({ ...req.body, clientId: client.id });
        res.status(201).json(appointment);
      } else {
        res.status(404).json({ error: 'Client not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  findAll: async (req, res) => {
    try {
      const appointments = await Appointment.findAll({
        include: ['client'],
      });
      res.json(appointments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  findOne: async (req, res) => {
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
  },

  update: async (req, res) => {
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
  },

  delete: async (req, res) => {
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
  },
};

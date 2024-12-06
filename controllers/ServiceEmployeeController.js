const { Service, Employee } = require('../models');

module.exports = {
  addEmployeeToService: async (req, res) => {
    try {
      const service = await Service.findByPk(req.params.serviceId);
      const employee = await Employee.findByPk(req.params.employeeId);

      if (service && employee) {
        await service.addEmployee(employee); // Método gerado automaticamente pela associação
        res.status(201).json({ message: 'Employee added to service' });
      } else {
        res.status(404).json({ error: 'Service or Employee not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  removeEmployeeFromService: async (req, res) => {
    try {
      const service = await Service.findByPk(req.params.serviceId);
      const employee = await Employee.findByPk(req.params.employeeId);

      if (service && employee) {
        await service.removeEmployee(employee); // Método gerado automaticamente pela associação
        res.json({ message: 'Employee removed from service' });
      } else {
        res.status(404).json({ error: 'Service or Employee not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getEmployeesOfService: async (req, res) => {
    try {
      const service = await Service.findByPk(req.params.serviceId, {
        include: {
          model: Employee,
          as: 'employees',
        },
      });

      if (service) {
        res.json(service.employees);
      } else {
        res.status(404).json({ error: 'Service not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getServicesOfEmployee: async (req, res) => {
    try {
      const employee = await Employee.findByPk(req.params.employeeId, {
        include: {
          model: Service,
          as: 'services',
        },
      });

      if (employee) {
        res.json(employee.services);
      } else {
        res.status(404).json({ error: 'Employee not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

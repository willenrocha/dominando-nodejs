import Customer from "../models/Customer";

class CustomersController {
  // listagem dos registros
  async index(req, res) {
    const data = await Customer.findAll({
      limit: 1000,
    });
    return res.json(data);
  }

  // listagem 1 registro
  show(req, res) {
    const id = parseInt(req.params.id, 10);
    const customer = customers.find((item) => item.id === id);
    const status = customer ? 200 : 400;

    console.warn("GET :: /customers/:id ", customer);

    return res.status(status).json(customer);
  }
}

export default new CustomersController();

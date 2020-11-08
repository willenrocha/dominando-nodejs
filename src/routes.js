import { Router } from "express";

import customers from "./app/controllers/CustomersController";

const routes = new Router();

routes.get("/customers", customers.index);
routes.get("/customers/:id", customers.show);

export default routes;

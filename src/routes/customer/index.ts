/* eslint-disable @typescript-eslint/no-misused-promises */
import express from "express";
import { getCustomerByIdHandler } from "./getCustomerById";
import { getCustomersHandler } from "./getCustomers";
import { postCustomersHandler } from "./postCustomers";

export const CustomerRouter = express.Router();
CustomerRouter.get("/customer/:customerId", getCustomerByIdHandler);
CustomerRouter.get("/all", getCustomersHandler);
CustomerRouter.post("/customer", postCustomersHandler);

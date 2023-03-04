import type { Request, Response } from "express";
import { prismaClient } from "../../services/prismaClientService";

interface CustomerInput {
    name: string;
    birthDate: string;
    address: string;
    email: string;
}

export async function postCustomersHandler(request: Request, response: Response) {
    const customerData: CustomerInput = request.body as CustomerInput;
    try {
        const customer = await prismaClient.customer.create({
            data: customerData,
        });
        response.status(201).json(customer);
    } catch (error) {
        response.status(500).json({ error: "Unable to create customer" });
    }
}

import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";

const productsRoutes = Router();

productsRoutes.get("/:id", (request, response) => {
	// Extraindo os query params de um jeito mais fácil
	const { page, limit } = request.query;

	response.send(`Página ${page} de ${limit}`);
});

// Middleware local em uma rota especifica.
productsRoutes.post("/", myMiddleware, (request, response) => {
	const { name, price } = request.body;

	// response.send(`Produto ${name} custa $ ${price}`)
	response.status(201).json({ name, price, user_id: request.user_id });
});

export { productsRoutes };

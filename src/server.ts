import express from "express";
import { myMiddleware } from "./middlewares/my-middleware";

const PORT = 3333;

const app = express();

// Utilizando o middleware de forma global.
app.use(myMiddleware);

// Definimos que o padrão de dados recebidos é JSON
app.use(express.json());

app.get("/products", (request, response) => {
	// Extraindo os query params de um jeito mais fácil
	const { page, limit } = request.query;

	response.send(`Página ${page} de ${limit}`);
});

app.post("/products", (request, response) => {
	const { name, price } = request.body;

	// response.send(`Produto ${name} custa $ ${price}`)
	response.status(201).json({ name, price });
});

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));

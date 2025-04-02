import express, {
	type NextFunction,
	type Request,
	type Response,
} from "express";
import { routes } from "./routes";
import { AppError } from "./utils/AppError";

const PORT = 3333;

const app = express();

// Definimos que o padrão de dados recebidos é JSON
app.use(express.json());

app.use(routes);

/**
 * 400 (Bad Request): Error do cliente.
 * 500 (Internal Server Error): Erro interno do servidor.
 */

app.use(
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	(error: any, request: Request, response: Response, _: NextFunction) => {
		if (error instanceof AppError) {
			return response.status(error.statusCode).json({ message: error.message });
		}
		response.status(500).json({ message: error.message });
	},
);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));

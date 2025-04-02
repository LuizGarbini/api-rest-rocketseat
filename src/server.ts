import express, {
	type NextFunction,
	type Request,
	type Response,
} from "express";
import { routes } from "./routes";

const PORT = 3333;

const app = express();

// Definimos que o padrão de dados recebidos é JSON
app.use(express.json());

app.use(routes);

app.use(
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	(error: any, request: Request, response: Response, _: NextFunction) => {
		response.status(500).json({ message: error.message });
	},
);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));

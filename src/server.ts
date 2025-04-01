import express from "express";
import { routes } from "./routes";

const PORT = 3333;

const app = express();

// Definimos que o padrão de dados recebidos é JSON
app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));

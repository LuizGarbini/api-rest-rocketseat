import type { Request, Response } from "express";

class ProductsController {
	/**
	 * index - GET para listar vários registros.
	 * show - GET para exibir um registro específico.
	 * create - POST para criar um registro.
	 * update - PUT para atualizar um registro.
	 * remove - DELETE para deletar um registro.
	 */

	index(request: Request, response: Response) {
		// Extraindo os query params de um jeito mais fácil
		const { page, limit } = request.query;

		response.send(`Página ${page} de ${limit}`);
	}

	create(request: Request, response: Response) {
		const { name, price } = request.body;

		//throw new AppError("Erro ao tentar criar um produto!");

		// response.send(`Produto ${name} custa $ ${price}`)
		response.status(201).json({ name, price, user_id: request.user_id });
	}
}

export { ProductsController };

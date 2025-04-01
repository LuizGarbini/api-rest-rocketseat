import express from "express"

const PORT = 3333

const app = express()

// Definimos que o padrão de dados recebidos é JSON
app.use(express.json())

app.get("/products", (request, response) => {
  // Extraindo os query params de um jeito mais fácil
  const { page, limit } = request.query

  response.send(`Página ${page} de ${limit}`)
})

app.post("/products", (request, response) => {
  const { name, price} = request.body

  response.send(`Produto ${name} custa $ ${price}`)
})

app.listen(PORT, () => console.log(`Server is running at ${PORT}`))
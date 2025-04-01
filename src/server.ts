import express from "express"

const PORT = 3333

const app = express()

app.get("/products", (request, response) => {
  // Extraindo os query params de um jeito mais fácil
  const { page, limit } = request.query

  response.send(`Página ${page} de ${limit}`)
})

app.listen(PORT, () => console.log(`Server is running at ${PORT}`))
const express = require('express')
const app = express()
const { products } = require('./data')
app.get('/', (req, res) => {
  res.send('<h1>Home page </h1> <a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, product }
  })

  res.json(newProducts)
})
app.get('/api/products/:id', (req, res) => {
  const { id } = req.params
  const singleProduct = products.find((product) => product.id === Number(id))
  if (!singleProduct) {
    return res.status(404).send('Product Does not exist')
  }
  return res.json(singleProduct)
})
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params)
  res.send('hello world')
})
app.listen(5000, () => {
  console.log('Port is active')
})

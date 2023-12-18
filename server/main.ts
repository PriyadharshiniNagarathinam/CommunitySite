import express from 'express'
import ViteExpress from 'vite-express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = Number(process.env.PORT || 3000)

app.get('/hello', (_, res) => {
  res.send('Hello Vite + React + TypeScript!')
})

ViteExpress.listen(app, PORT, () =>
  console.log('Server is listening on port http://localhost:3000/')
)

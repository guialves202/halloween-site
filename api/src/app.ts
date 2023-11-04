import express from 'express'
import { Express } from 'express'
import path from 'path'
import cors from 'cors'

import productRoutes from './routes/product'

class App {
  app: Express
  constructor() {
    this.app = express()
    this.config()
    this.middlewares()
    this.routes()
  }

  config() {
    this.app.use(express.static(path.join(__dirname, '..', 'public')))
  }

  middlewares() {
    this.app.use(cors())
  }

  routes() {
    this.app.use('/products', productRoutes)
  }
}

export default new App().app

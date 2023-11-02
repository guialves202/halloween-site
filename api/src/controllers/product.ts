import { Request, Response } from "express";
import ProductRepository from "../repositories/product";
import { Categories } from "../utils/types";

class ProductController {
  async index(req: Request, res: Response) {
    try {
      const products = await ProductRepository.index()
      return res.status(200).send(products)
    } catch (err) {
      return res.status(500).send(err)
    }
  }

  async indexSpecificCategory(req: Request, res: Response) {
    const category = req.params.category

    if (!category) return res.status(400).send('Por favor informe uma categoria')
    if (!Object.values(Categories).includes(category as Categories)) return res.status(400).send('Por favor informe uma categoria válida')

    try {
      const products = await ProductRepository.indexSpecificCategory(category as Categories)
      return res.status(200).send(products)
    } catch (err) {
      return res.status(500).send(err)
    }
  }

  async show(req: Request, res: Response) {
    const productId = req.params.id

    if (!productId) return res.status(400).send('Por favor informe o id de um produto')

    try {
      const product = await ProductRepository.show(productId)
      if (!product) return res.status(404)

      return res.status(200).send(product)
    } catch (err) {
      return res.status(500).send(err)
    }
  }

  async store(req: Request, res: Response) {
    const { name, description, price, imageFilename, category } = req.body

    if (!name || !description || !price || !imageFilename || !category) return res.status(400).send('Por favor informe todos os campos')

    try {
      await ProductRepository.store({ name, description, price, imageFilename, category })
      return res.status(201)
    } catch (err) {
      return res.status(500).send(err)
    }
  }

  async update(req: Request, res: Response) {
    const { name, description, price, imageFilename, category, productId } = req.body

    if (!productId) return res.status(400).send('Informe o id do produto')
    if (!name && !description && !price && !imageFilename && !category) return res.status(400).send('Por favor informe pelo menos um campo')

    try {
      const product = await ProductRepository.show(productId)
      if (!product) return res.status(404)

      await ProductRepository.update({ name, description, price, imageFilename, category }, productId)
      return res.status(200)
    } catch (err) {
      return res.status(500).send(err)
    }
  }

  async delete(req: Request, res: Response) {
    const { productId } = req.body

    if (!productId) return res.status(400).send('Informe o id do produto')

    try {
      const product = await ProductRepository.show(productId)
      if (!product) return res.status(404)

      await ProductRepository.delete(productId)
      return res.status(200)
    } catch (err) {
      return res.status(500).send(err)
    }
  }
}

export default new ProductController

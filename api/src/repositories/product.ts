import { prisma } from "../database/prisma";
import { Categories, ProductModel } from "../utils/types";

class ProductRepository {
  async index() {
    try {
      return await prisma.product.findMany()
    } catch (err) {
      throw new Error('Ocorreu um erro interno ao buscar os produtos')
    }
  }

  async indexSpecificCategory(category: Categories) {
    try {
      return await prisma.product.findMany({
        where: {
          category: category
        }
      })
    } catch (err) {
      throw new Error('Ocorreu um erro interno ao buscar os produtos')
    }
  }

  async show(productId: string) {
    try {
      return await prisma.product.findUnique({
        where: {
          id: productId
        }
      })
    } catch (err) {
      throw new Error('Ocorreu um erro interno ao buscar o produto')
    }
  }

  async store(product: ProductModel) {
    try {
      return await prisma.product.create({
        data: product
      })
    } catch (err) {
      throw new Error('Ocorreu um erro interno ao salvar o produto')
    }
  }

  async update(newProduct: ProductModel, productId: string) {
    try {
      return await prisma.product.update({
        where: {
          id: productId
        },
        data: newProduct
      })
    } catch (err) {
      throw new Error('Ocorreu um erro interno ao atualizar o produto')
    }
  }

  async delete(productId: string) {
    try {
      return await prisma.product.delete({
        where: {
          id: productId
        }
      })
    } catch (err) {
      throw new Error('Ocorreu um erro interno ao deletar o produto')
    }
  }
}

export default new ProductRepository

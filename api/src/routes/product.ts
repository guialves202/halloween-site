import { Router } from "express";
import ProductController from '../controllers/product'

const router = Router()

router.get('/', ProductController.index)
router.get('/:category', ProductController.indexSpecificCategory)
router.get('/:id', ProductController.show)

router.post('/', ProductController.store)
router.put('/', ProductController.update)

router.delete('/', ProductController.delete)

export default router

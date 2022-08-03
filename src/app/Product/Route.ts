import { Router } from 'express';
import productController from './Controller';

const router = Router();
const controller = new productController();

// router.get('/product', controller.get);
router.route('/product').get(controller.get).post(controller.post);
router
  .route('/product/:id')
  .get(controller.getOne)
  .put(controller.update)
  .delete(controller.delete);
export default router;

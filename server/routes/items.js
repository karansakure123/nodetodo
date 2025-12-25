import express from 'express';
import {
  getAllItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} from '../controllers/itemController.js';

const router = express.Router();

// Routes
router.route('/')
  .get(getAllItems)
  .post(createItem);

router.route('/:id')
  .get(getItem)
  .put(updateItem)
  .delete(deleteItem);

export default router;
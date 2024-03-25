import express from 'express'
import { DeleteTask, NewTask, UpdateTask, getMyTask } from '../controllers/task.js'
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router()

router.post('/new', isAuthenticated, NewTask)

router.get('/mytasks', isAuthenticated, getMyTask)

router.route('/:id')
    .put(isAuthenticated, UpdateTask)
    .delete(isAuthenticated, DeleteTask)


export default router;
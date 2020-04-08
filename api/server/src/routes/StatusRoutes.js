import { Router } from 'express';
import StatusController from '../controllers/StatusController';

const router = Router();

router.route('/')
    .post(StatusController.addStatus);

router.route('/:id')
    .get(StatusController.getStatus)
    
   
export default router;
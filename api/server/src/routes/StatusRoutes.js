import { Router } from 'express';
import StatusController from '../controllers/StatusController';

const router = Router();

router.route('/')
    .post(StatusController.addStatus)
    
   
export default router;
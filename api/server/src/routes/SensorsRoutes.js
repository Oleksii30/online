import { Router } from 'express';
import SensorController from '../controllers/SensorController';

const router = Router();

router.route('/')
    .get(SensorController.getUserSensonrs)
    
export default router;
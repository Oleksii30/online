import { Router } from 'express';
import SensorController from '../controllers/SensorController';

const router = Router();

router.route('/')
    .post(SensorController.addSensor)
    
router.route('/:owner')
    .get(SensorController.getSensors)
   
export default router;
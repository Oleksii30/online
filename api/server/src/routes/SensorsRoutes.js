import { Router } from 'express';
import SensorController from '../controllers/SensorController';
import auth from '../middleware/auth'
import getAllSensors from '../middleware/getAllSensors'

const router = Router();

router.route('/')
    .post(SensorController.addSensor) 
    .get(auth, getAllSensors, SensorController.getSensors)
   
export default router;
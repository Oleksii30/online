import { Router } from 'express';
import SensorController from '../controllers/SensorController';
import auth from '../middleware/auth'
import getWindowSensors from '../middleware/getWindowSensors'

const router = Router();

router.route('/')
    .post(SensorController.addSensor) 
    .get(auth, getWindowSensors, SensorController.getSensors)
   
export default router;
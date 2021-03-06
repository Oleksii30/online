import SensorService from '../services/SensorService';
import Util from '../utils/Utils';
require('dotenv').config();

const util = new Util();

class SensorController {
    static async getSensors(req, res) {
                
        try {           
                       
            await SensorService.deleteAllSensors()           

            const userSensors = [...req.windowSensors, ...req.movementSensors]
            await SensorService.addArrayOfSensors(userSensors)
                      
            util.setSuccess(200, 'Sensors retrieved', userSensors);
            return util.send(res);

        } catch (error) {
            util.setError(500, error);
            return util.send(res);
        }
    }

    static async addSensor(req, res) {
                
    if (!req.body.type || !req.body.address || !req.body.name || !req.body.room) {
            util.setError(400, 'Please provide complete details');
            return util.send(res);
        }
        const newSensor = req.body;
        try {
            const createdSensor = await SensorService.addSensor(newSensor);
            util.setSuccess(201, 'Sensor Added!', createdSensor);
            return util.send(res);
        } catch (error) {
            util.setError(500, error.message);
            return util.send(res);
        }
    }
    static async getSensorsForCronJob() {
        
        try {           
            const sensors = await SensorService.getAllSensors()            
            return sensors

        } catch (error) {            
            return error
        }
    }

}

export default SensorController;
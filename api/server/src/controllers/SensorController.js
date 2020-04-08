import SensorService from '../services/SensorService';
import Util from '../utils/Utils';

const util = new Util();

class SensorController {
    static async getSensors(req, res) {
        
        try {
            const userSensors = await SensorService.getAllSensorsOfOwner(req.params.owner)

            /*const headers = {
                'Content-Type': 'text/event-stream',
                'Connection': 'keep-alive',
                'Cache-Control': 'no-cache'
              };
              res.writeHead(200, headers);

              const data = `data: ${JSON.stringify(userSensors)}\n\n`;
              res.write(data);*/
            util.setSuccess(200, 'Sensors retrieved', userSensors);
            return util.send(res);

        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }

    static async addSensor(req, res) {
                
    if (!req.body.type || !req.body.address || !req.body.owner || !req.body.room) {
            util.setError(400, 'Please provide complete details');
            return util.send(res);
        }
        const newSensor = req.body;
        try {
            const createdSensor = await SensorService.addSensor(newSensor);
            util.setSuccess(201, 'Sensor Added!', createdSensor);
            return util.send(res);
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }
    }

}

export default SensorController;
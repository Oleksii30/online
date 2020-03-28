import StatusService from '../services/StatusService';
import Util from '../utils/Utils';

const util = new Util();

class StatusController {
    
    static async addStatus(req, res) {
                
    if (!req.body.sensorId || !req.body.status) {
            util.setError(400, 'Please provide complete details');
            return util.send(res);
        }
        const newStatus = req.body;
        try {
            const createdStatus = await StatusService.addStatus(newStatus);
            util.setSuccess(201, 'Status Added!', createdStatus);
            return util.send(res);
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }
    }

}

export default StatusController;
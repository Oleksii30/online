import SensorService from '../services/SensorService';
import Util from '../utils/Utils';

const util = new Util();

class SensorController {
    static async getUserSensors(req, res) {
        try {
            const userSensors = await SensorService.getUserSensors(req.params.user)
            util.setSuccess(200, 'Tests retrieved', userSensors);
            return util.send(res);

        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }

}

export default SensorController;
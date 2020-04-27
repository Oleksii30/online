import requestToOtherServices from '../utils/RequestToOtherServices'
import Util from '../utils/Utils';
import SensorService from '../services/SensorService';

const util = new Util();

const getWindowSensors = async(req, res, next) => {
    try {
        
        let windowSensors = await requestToOtherServices('https://windows-protection-backend.herokuapp.com/api/sensor',req.token)
       if (!windowSensors) {
            throw new Error()
        }
        await SensorService.deleteAllSensorsOfType('window')

        for (let sensor of windowSensors.data){
            let newSensor = {
                id: sensor.id,
                type:'window',
                room: sensor.ZoneName,
                address:'',
                name: sensor.WindowName
            }
            await SensorService.addSensor(newSensor)           
        }
       
        next()
    } catch (error) {
        util.setError(400, "No window sensors");
        return util.send(res);
    }
}

export default getWindowSensors
import database from '../models';

class StatusService {
   
    static async addStatus(newStatus) {
        try {
            return await database.Status.create(newStatus);
        } catch (error) {
            throw error;
        }
    }
    static async getAllStatusesById(id){
        try{
            return await database.Status.findAll({
                where: {SensorId: id},
            });
        }catch(error){
            throw error
        }
    }
}

export default StatusService;
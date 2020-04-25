import database from '../models';
import Sequelize from 'sequelize';
const Op = Sequelize.Op;

class StatusService {
   
    static async addStatus(newStatus) {
        try {
            return await database.Status.create(newStatus);
        } catch (error) {
            throw error;
        }
    }
    static async getAllStatusesById(id,limit){
        
        try{
            return await database.Status.findAll({
                where: {SensorId: id, 
                        createdAt:{
                            [Op.gt]:new Date(new Date()-limit * 1000 * 60)
                        }                    
                    }                
            });
        }catch(error){
            throw error
        }
    }
    static async deleteStatuses() {
        try {
            await database.Status.destroy({
                    where: {createdAt:{
                        [Op.lt]:new Date(new Date()-120 * 1000 * 60)
                    } 
                  }      
                })                              
            return null;
        } catch (error) {
            throw error;
        }
    }
}

export default StatusService;
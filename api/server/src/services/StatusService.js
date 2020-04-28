import database from '../models';
import Sequelize from 'sequelize';
const Op = Sequelize.Op;

class StatusService {
   
    static async addStatus(newStatus) {
        try {
            return await database.status.create(newStatus);
        } catch (error) {
            throw error;
        }
    }
    static async getAllStatusesById(id,limit){
        
        try{
            return await database.status.findAll({
                where: {sensorId: id, 
                        createdAt:{
                            [Op.gt]:new Date(new Date()-limit * 1000 * 60)
                        }                   
                    },
                order: [
                        ['createdAt', 'ASC']                        
                    ]                
            });
        }catch(error){
            throw error
        }
    }
    static async deleteStatuses() {
        try {
            await database.status.destroy({
                    where: {createdAt:{
                        [Op.lt]:new Date(new Date()-15 * 1000 * 60)
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
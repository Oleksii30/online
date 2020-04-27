import database from '../models';

class SensorService {

    static async getAllSensors() {
        
        try {
            return await database.sensor.findAll();
        } catch (error) {
            throw error;
        }
    }
    
    static async getAllSensorsOfOwner(owner) {
        
        try {
            return await database.sensor.findAll({
                where: {owner: owner}                 
            });
        } catch (error) {
            throw error;
        }
    }

    static async addSensor(newSensor) {
        try {
            return await database.sensor.create(newSensor);
        } catch (error) {
            throw error;
        }
    }

    static async deleteAllSensorsOfType(type) {
        try {            
            await database.sensor.destroy({
                    where: { type: type }
                });
                            
            return null;
        } catch (error) {
            throw error;
        }
    }


   /* static async getAllSensors() {
        try {
            return await database.Sensor.findAll();
        } catch (error) {
            throw error;
        }
    }

    static async addSensor(newSensor) {
        try {
            return await database.Sensor.create(newSensor);
        } catch (error) {
            throw error;
        }
    }

    static async updateSensor(id, updateSensor) {
        try {
            const sensorToUpdate = await database.Sensor.findOne({
                where: { id: Number(id) }
            });

            if (sensorToUpdate) {
                await database.Sensor.update(updateSensor, { where: { id: Number(id) } });

                return updateTest;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }

    static async getASensor(id) {
        try {
            const thesensor = await database.Sensor.findOne({
                where: { id: Number(id) }
            });

            return theSensor;
        } catch (error) {
            throw error;
        }
    }

    */
}

export default SensorService;
import database from '../models';

class SensorService {
    static async getAllUserSensors(owner) {
        
        try {
            return await database.Sensor.findAll({
                where: {
                    owner: owner
                  },
                  include: database.Status
            });
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

    static async deleteSensor(id) {
        try {
            const sensorToDelete = await database.Sensor.findOne({ where: { id: Number(id) } });

            if (sensorToDelete) {
                const deletedTest = await database.Sensor.destroy({
                    where: { id: Number(id) }
                });
                return deletedSensor;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }*/
}

export default SensorService;
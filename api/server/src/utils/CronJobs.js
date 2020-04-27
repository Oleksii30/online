import cron from 'node-cron'
import SensorController from '../controllers/SensorController'
import StatusController from '../controllers/StatusController'

function addStatusesJob(){
    
cron.schedule('*/10 * * * * *', async () => {
  try {
    let sensors = await SensorController.getSensorsForCronJob()
    for (let sensor of sensors){
      let status = Math.random() <= 0.8? 'online' : 'offline'
      let sensorId = sensor.dataValues.id
      let newStatus = {
        sensorId:sensorId,
        status:status
      }
      await StatusController.addStatusForCronJob(newStatus)     
    }
  }
  catch(error){    
    console.log(error)
  } 
  });
}
function removeOldStatusesJob(){
  cron.schedule('*/30 * * * *', async () => {
    try {
      await StatusController.deleteStatusesForCronJob()
        }
    
    catch(error){    
      console.log(error)
    } 
    });
}

export default {addStatusesJob, removeOldStatusesJob}
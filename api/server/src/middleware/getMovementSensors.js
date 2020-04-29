import requestToOtherServices from '../utils/RequestToOtherServices'

const getMovementSensors = async(req) => {
    try {
        
        let movementSensors = await requestToOtherServices('https://ves-2020-movement-detection.herokuapp.com/api/sensor',req.token)
        req.movementSensors = []
       if (movementSensors.message === 'Sensors retrieved')
        {
           for (let sensor of movementSensors.data){
                let newSensor = {
                    id: sensor.id,
                    type:'movement',
                    room: sensor.room,
                    address:'',
                    name: ''
                }
                req.movementSensors.push(newSensor)                         
            }

        }      
              
    } catch (error) {
       console.log('error in movement',error)
    }
}

export default getMovementSensors
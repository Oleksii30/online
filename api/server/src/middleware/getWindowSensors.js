import requestToOtherServices from '../utils/RequestToOtherServices'

const getWindowSensors = async(req) => {
    try {
        
        let windowSensors = await requestToOtherServices('https://windows-protection-backend.herokuapp.com/api/sensor',req.token)
        req.windowSensors = []
              
        if (windowSensors.message === 'Sensors retrieved'){
        for (let sensor of windowSensors.data){
            let newSensor = {
                id: sensor.id,
                type:'window',
                room: sensor.ZoneName,
                address:'',
                name: sensor.WindowName
            }
            req.windowSensors.push(newSensor)                   
            }
        }
               
    } catch (error) {
       console.log('error in windows',error)
    }
}

export default getWindowSensors
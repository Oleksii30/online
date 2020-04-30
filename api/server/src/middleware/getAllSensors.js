import getMovementSensors from './getMovementSensors'
import getWindowSensors from './getWindowSensors'

const getAllSensors = async(req, res, next) => {
    try{ 
       await Promise.all(
            getMovementSensors(req),
            getWindowSensors(req)
        )        
        next()
    } catch (error) {
        console.log(error)
    }
}

export default getAllSensors

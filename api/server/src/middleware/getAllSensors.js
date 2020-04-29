import getMovementSensors from './getMovementSensors'
import getWindowSensors from './getWindowSensors'

const getAllSensors = async(req, res, next) => {
    try{ 
        Promise.all(
            await getMovementSensors(req),
            await getWindowSensors(req)
        )        
        next()
    } catch (error) {
        console.log(error)
    }
}

export default getAllSensors
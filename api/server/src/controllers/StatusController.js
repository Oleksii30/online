import StatusService from '../services/StatusService';
import Util from '../utils/Utils';

const util = new Util();
let connections = []

class StatusController {

    static async addStatusForCronJob(newStatus) {
                
            try {
                const createdStatus = await StatusService.addStatus(newStatus);
                
                console.log(connections.length)
                                                   
                let connection = connections.find(c=> c.id == newStatus.SensorId)
            if (connection){  
                connection.res.write(`id:${createdStatus.id}\n`)
                connection.res.write(`data: ${JSON.stringify(createdStatus)}\n\n`)
                }            
            } catch (error) {
                throw new Error(error)
            }
        }

        static async deleteStatusesForCronJob() {
                
            try {
                await StatusService.deleteStatuses();              
                   
            } catch (error) {
                throw new Error(error)
            }
        }
    
      
    static async addStatus(req, res) {
                
    if (!req.body.SensorId || !req.body.status) {
            util.setError(400, 'Please provide complete details');
            return util.send(res);
        }
        const newStatus = req.body;
        try {
            const createdStatus = await StatusService.addStatus(newStatus);
            
            util.setSuccess(201, 'Status Added!', createdStatus);
            util.send(res);
                                               
            let connection = connections.find(c=> c.id == newStatus.SensorId)
          
            connection.res.write(`id:${createdStatus.id}\n`)
            connection.res.write(`data: ${JSON.stringify(createdStatus)}\n\n`)
                        
        } catch (error) {
            util.setError(500, error.message);
            return util.send(res);
        }
    }

    static async getStatus(req, res){
        try{            
            let id = req.params.id
            let limit = req.query.limit === '0'? 1 : req.query.limit                      
            const statuses = await StatusService.getAllStatusesById(id,limit)
            
            const headers = {
                'Content-Type': 'text/event-stream',
                'Connection': 'keep-alive',
                'Cache-Control': 'no-cache'
              };
              res.writeHead(200, headers);               
                
              res.write(`data: ${JSON.stringify(statuses)}\n\n`);

              const newConnection = {
                id:req.params.id,
                res
              }
              connections.push(newConnection)
                                       
            req.on('close',()=>{
                  connections = connections.filter(c=>{return c.id != newConnection.id})
              })

        }catch(error){
            util.setError(500, error);
            return util.send(res);
        }
    }
}

export default StatusController;
import StatusService from '../services/StatusService';
import Util from '../utils/Utils';

const util = new Util();
let connections = []

class StatusController {
    
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

            console.log('connections quantity',connections.length)
                        
            let connection = connections.find(c=> c.id == newStatus.SensorId)
           
            //const data = `data: ${JSON.stringify(createdStatus)}\n\n`
            //connection.res.write(data)
            connection.res.write(`id:${createdStatus.id}\n`)
            connection.res.write(`data: ${JSON.stringify(createdStatus)}\n\n`)
                        
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }
    }

    static async getStatus(req, res){
        try{
            const statuses = await StatusService.getAllStatusesById(req.params.id)
            const headers = {
                'Content-Type': 'text/event-stream',
                'Connection': 'keep-alive',
                'Cache-Control': 'no-cache'
              };
              res.writeHead(200, headers);

               
                //const data = `data: ${JSON.stringify(statuses)}\n\n`  
                //res.write(data)           
              res.write(`id:${statuses[0].id}\n`);
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
            util.setError(400, error);
            return util.send(res);
        }
    }
}

export default StatusController;
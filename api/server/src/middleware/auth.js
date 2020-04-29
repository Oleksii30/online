import requestToOtherServices from '../utils/RequestToOtherServices'
import Util from '../utils/Utils';

const util = new Util();

const auth = async(req, res, next) => {
    try {

        let token = req.headers.authorization
        const user = await requestToOtherServices('https://security-system-auth.herokuapp.com/api/verifying/user',token)
        if (!user) {
            throw new Error()
        }
        req.token = token
        next()
    } catch (error) {
        util.setError(400, "User is not authenticated");
        return util.send(res);
    }
}

export default auth
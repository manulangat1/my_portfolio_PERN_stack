import { HomeService } from '../../services'
import responsehandler from '../../helpers/responsehandler'

export default class HomeController{
    static async createHome(req,res){
        const { title } = req.body;
        const homeDetails = {
            title
        };
        const home = await HomeService.createHome(homeDetails);
        return responseHandler(res,201,'Home Created',home);
    }
    static async getAllHomes(req,res){
        const home = await HomeService.getAllHomes()
        return responseHandler(res,200,'Home Fetched',home)
    }
}
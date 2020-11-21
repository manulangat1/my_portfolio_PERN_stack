import { HomeService } from '../../services'
import responseHandler from '../../helpers/responsehandler'

export default class HomeController{
    static async createHome(req,res){
        const { title } = req.body;
        const homeDetails = {
            title
        };
        const home = await HomeService.createHome(homeDetails);
        return responseHandler(res,'Home Created',201,home);
    }
    static async getAllHomes(req,res){
        const home = await HomeService.getHome()

        return responseHandler(res,'Home Fetched',200,home)
    }
}
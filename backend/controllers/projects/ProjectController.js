import {ProjectsService } from '../../services';
import responseHandler from '../../helpers/responsehandler'


export default class ProjectsController{
    static async createProject(req,res){
        const details = {
            ...req.body
        }
        const   projects = await ProjectsService.loadProjects();
        if (projects.length>0){
            return responseHandler(res,'About Already exists',403,projects)
        }
        const project = await ProjectsService.createProjects(details);
        return responseHandler(res,'Project created successfully',201,project);
    }
    static async getProjects(req,res){
        const project = await ProjectsService.loadProjects();

        return responseHandler(res,'Projects loaded successfully',200,project);
    }
    static async getProjectsbyId(req,res){
        const project = await ProjectsService.getProjectsById(req.params.id);
        return responseHandler(res,'Projects loaded successfully',200,project);
    }
}
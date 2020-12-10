import ErrorHandler from '../models/ErrorHandler';
import { JobModel } from '../models/iJobModel';
import JobHandler from '../logic/JobHandler';

class JobDistributorController {

    defaultMethod(){
        throw new ErrorHandler(501, 'Not implemented method');
    }

    distributeMethod(reqBody: JobModel[]){
        JobHandler.jobGenerator(reqBody)
        return{
            text: `You've reached the ${this.constructor.name} default method`
        };
    }
}

export = new JobDistributorController();
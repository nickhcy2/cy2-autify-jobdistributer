import { iJobCreator } from './iJobHandler';
import { JobModel } from "../models/iJobModel";

class JobCreator implements iJobCreator {
    private jobs: JobModel[] = [];

    //Links the body to a local jobModel array and changes/updates the values of all jobs to be able to connect with each other 
    jobGenerator(reqBody: JobModel[]): void{
        this.jobs = reqBody
        for(let element of this.jobs){
            element.name = this.nameGenerator(element.name, element.module)
                /*TODO 
                    change ports of connections for online hosting deployment
                */

        }
        this.postData();
    }

    //Send the actual json with an api call to an external service async
    postData() {

    }

    //Generate a custom name that will be consistent for all projects made with this system
    nameGenerator(name: string, module: string): string{
        var newname = name + "-" + module + "-autify";
        newname.toLowerCase;
        return newname;
    }
}

export = new JobCreator
import { iJobCreator } from './iJobHandler';
import { JobModel } from "../models/iJobModel";
import JobBuilder from "./JobBuilder";
import axios from 'axios';

const jobBuilder = new JobBuilder

class JobCreator implements iJobCreator {
    private jobs: JobModel[] = [];

    //Links the body to a local jobModel array and changes/updates the values of all jobs to be able to connect with each other 
    jobGenerator(reqBody: JobModel[]){
        this.jobs = reqBody
        try{
            for(let element of this.jobs){
                //Here all custom edits need to be eddited as a refference. The changes itself need to be created in the JobBuilder function
                element.name = jobBuilder.nameGenerator(element.name, element.module)
            }
            this.postData();
            return "success"
        }catch(error){
            return error
        }
        
    }

    //Send the actual json with an api call to an external service async TODO use 'promise' to make the an array of api calls
    async postData() {
        let res;
        for (let i = 0; i < this.jobs.length; i++) {
            var url = this.findDestination(this.jobs[i].module);
            if(this.jobs[i].active == true){
                var req = JSON.stringify(this.jobs[i])
                const temp = await axios.post(url, req)
                .then(function (response) {
                    res = response.status
                })
                .catch(function (error) {
                    var err = error.errno
                    console.log(err)
                    return err
                });
            }
        }
        return "success"
    }

    // Decide what env variables needs to be used based the module that has been send. 
    findDestination(module: string) {
        var url;
        var tempUrl = 'http://localhost:0000/';
        switch (module) {
            case    'Frontend': url = process.env['SERVER_CON_URL_FRONTEND'] || tempUrl; break;
            case    'Backend' : url = process.env['SERVER_CON_URL_BACKEND'] || tempUrl; break;
            case    'Chatbot' : url = process.env['SERVER_CON_URL_CHATBOT'] || tempUrl; break;
            case    'TestCase' : url = process.env['SERVER_CON_URL_TESTCASE'] || tempUrl;  break;
            default: url = 'http://localhost:0000/';              break;
        }
        return url;
    }
}

export default JobCreator



import { iJobCreator } from './iJobHandler';
import { JobModel } from "../models/iJobModel";
import JobBuilder from "./JobBuilder";
import axios from 'axios';

class JobCreator implements iJobCreator {
    private jobs: JobModel[] = [];

    //Links the body to a local jobModel array and changes/updates the values of all jobs to be able to connect with each other 
    jobGenerator(reqBody: JobModel[]): void{
        this.jobs = reqBody
        for(let element of this.jobs){
            element.name = JobBuilder.nameGenerator(element.name, element.module)
        }
        this.postData();
    }

    //Send the actual json with an api call to an external service async TODO use 'promise' to make the an array of api calls
    postData() {
        try{
            this.jobs.forEach(element => {
                var customurl;
                switch (element.module) {
                    case    'Frontend': customurl = '3002';   break;
                    case    'Backend' : customurl = '3003';   break;
                    case    'Chatbot' : customurl = '3004';   break;
                    default:                                  break;
                }
                var url = "http://localhost:" + customurl + "/";
                var res
                if(element.active == true){
                    var req = JSON.stringify(element)
                    axios.post(url, req)
                    .then(function (response) {
                        res = response;
                    })
                    .catch(function (error) {
                        res = error;
                    });
                    var data = JSON.stringify(element);
                    console.log(req)
                }
            });
        }catch (error){
            console.log(error)
        }
    }
}

export = new JobCreator



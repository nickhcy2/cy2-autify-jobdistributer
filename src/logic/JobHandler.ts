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
               //console.log(element);
        }
        this.postData();
    }

    //Send the actual json with an api call to an external service async TODO use 'promise' to make the an array of api calls
    postData() {
        this.jobs.forEach(element => {
            // var xhr = new XMLHttpRequest();
            var customurl;
            switch (element.module) {
                case    'Frontend': customurl = '3002';   break;
                case    'Backend' : customurl = '3003';   break;
                case    'Chatbot' : customurl = '3004';   break;
                default:                                  break;
            }
            var url = "http://localhost:" + customurl + "/api";
            // xhr.open("POST", url, true);
            // xhr.setRequestHeader("Content-Type", "application/json");
            // xhr.onreadystatechange = function () {
            //     if (xhr.readyState === 4 && xhr.status === 200) {
            //         var json = JSON.parse(xhr.responseText);
            //     }
            // };
            var data = JSON.stringify(element);
            //xhr.send(data);
            console.log(data)
            console.log(url)
        });
    }

    //Generate a custom name that will be consistent for all projects made with this system
    nameGenerator(name: string, module: string): string{
        var newname = name + "-" + module + "-autify";
        newname.toLowerCase;
        return newname;
    }
}

export = new JobCreator
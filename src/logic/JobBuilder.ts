import { iJobBuilder } from './iJobBuilder'

class JobBuilder implements iJobBuilder
{
    //Generate a custom name that will be consistent for all projects made with this system
    nameGenerator(name: string, module: string): string{
        var newname = "cy2" + "-autify-product-" + module + "-" + name;
        newname.toLowerCase;
        return newname;
    }
}

export default JobBuilder

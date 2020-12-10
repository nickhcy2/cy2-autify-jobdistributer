import { Router } from 'express';
import JobDistributorRoute from './jobdistributor/JobDistributorRoute';

class MasterRouter {
    private _router = Router();
    private _subrouterJobDistributor = JobDistributorRoute;

    get router(){
        return this._router
    }

    constructor() {
        this._configure();
    }

    private _configure(){
        this._router.use('/distributor', this._subrouterJobDistributor );
    }
}

export = new MasterRouter().router
import { Router } from 'express';
import JobDistributorRoute from './jobdistributor/JobDistributorRoute';
import TestRouter from './jobdistributor/testRouter';

class MasterRouter {
    private _router = Router();
    private _subrouterJobDistributor = JobDistributorRoute;
    private _subrouterTest = TestRouter;

    get router(){
        return this._router
    }

    constructor() {
        this._configure();
    }

    private _configure(){
        this._router.use('/distributor', this._subrouterJobDistributor);
        this._router.use('/test', this._subrouterTest);
    }
}

export = new MasterRouter().router
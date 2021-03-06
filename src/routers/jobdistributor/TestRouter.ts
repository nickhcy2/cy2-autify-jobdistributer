import { NextFunction, Request, Response, Router } from 'express';
import JobDistributorController from '../../controllers/JobDistributorController';

class testRouter{
    private _router = Router();
    //private _controller = JobDistributorController;

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    private _configure(){
        this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
            try{
                res.status(200).json("Get request");
            }
            catch (error) { next(error) }
        });
        this._router.post('/', (req: Request, res: Response, next: NextFunction) => {
            try{
                res.status(200).json("Post request");
            }
            catch (error) { next(error) }
        });
    }
}

export = new testRouter().router;
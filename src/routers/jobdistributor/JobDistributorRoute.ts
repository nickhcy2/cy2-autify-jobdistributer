import { NextFunction, Request, Response, Router } from 'express';
import JobDistributorController from '../../controllers/JobDistributorController';

class themeonerouter{
    private _router = Router();
    private _controller = JobDistributorController;

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    private _configure(){
        this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
            try{
                const result = this._controller.defaultMethod();
                res.status(200).json(result);
            }
            catch (error) { next(error) }
        });
        this._router.post('/', (req: Request, res: Response, next: NextFunction) => {
            try{
                const result = this._controller.distributeMethod(req.body);
                res.status(200).json(result);
            }
            catch (error) { next(error) }
        });
    }
}

export = new themeonerouter().router;
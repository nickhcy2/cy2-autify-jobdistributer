import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import MasterRouter from './routers/MasterRouter';
import ErrorHandler from './models/ErrorHandler';
import cors from 'cors'
import helmet from "helmet";

dotenv.config({
    path: '.env'
});

var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200 // For legacy browser support
}


class Server {
    public app = express();
    public router = MasterRouter;
}

const server = new Server();

server.app.use(express.json());
server.app.use(helmet());
var corsConst = cors()
server.app.use(corsConst);
server.app.use(express.urlencoded({ extended: true }));
server.app.use('/api', server.router);
server.app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode || 500).json({
        status: 'error',
        statusCode: err.statusCode,
        message: err.message
    });
});

((port = process.env.APP_PORT || 3001) => {
    server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();
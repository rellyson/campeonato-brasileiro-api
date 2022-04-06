import express, { Application, Request, Response } from 'express';
import playerRouter from './routers/player-router';

export const createExpressApp =(port: string): Application => {
    const app: Application = express();

    //healthcheck
    app.get('/', (req: Request, res: Response) => {
        res.json({ code: 200, status: 'OK', dateTime: new Date().toISOString() });
    });

    app.use('/v1/player', playerRouter)

    return app
}
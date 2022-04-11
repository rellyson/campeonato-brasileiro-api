import express, { Application, Request, Response } from 'express';
import { exceptionHandlerMiddleware } from './middlewares/exception-handler-middleware';
import { playerRouter } from './routers/player-router';

export const createExpressApp =(): Application => {
    const app: Application = express();

    //healthcheck
    app.get('/v1/', (_: Request, res: Response) => {
        res.json({ code: 200, status: 'OK', dateTime: new Date().toISOString() });
    });

    app.use('/v1/player', playerRouter())
    app.use(exceptionHandlerMiddleware)
    
    return app
}
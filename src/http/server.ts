import express, { Application, Request, Response } from 'express';
import { exceptionHandlerMiddleware } from './middlewares/exception-handler-middleware';
import clubRouter from './routers/club-router';
import playerRouter from './routers/player-router';
import tournamentRouter from './routers/tournament-router';
import transactionRouter from './routers/transaction-router';

export const createExpressApp =(): Application => {
    const app: Application = express();

    app.use(express.json());
    app.use(exceptionHandlerMiddleware);

    //healthcheck
    app.get('/v1/', (_: Request, res: Response) => {
        res.json({ code: 200, status: 'OK', dateTime: new Date().toISOString() });
    });

    app.use('/v1/jogadores', playerRouter);
    app.use('/v1/times', clubRouter)
    app.use('/v1/torneios', tournamentRouter);
    app.use('/v1/transferencias', transactionRouter);
    
    return app
}
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';

import playerRouter from './routers/player-router';
import teamRouter from './routers/team-router';

export const createExpressApp = (port: string): Application => {
    const app: Application = express();

    app.use(bodyParser.json());

    //healthcheck
    app.get('/', (req: Request, res: Response) => {
        res.json({ code: 200, status: 'OK', dateTime: new Date().toISOString() });
    });

    app.use('/v1/player', playerRouter);
    app.use('/api/teams', teamRouter);

    return app
}
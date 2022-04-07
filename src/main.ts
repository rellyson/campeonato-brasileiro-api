import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';

import exempleRoute from './routers/exemple';
import teamRoute from './routers/team';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.json({ code: 200, status: 'OK', dateTime: new Date().toISOString() });
});

app.use('/api/exemples', exempleRoute);
app.use('/api/teams', teamRoute);

app.listen(port, () => {
    // TODO: Implementar conexão com o banco aqui.
    console.log(`Listening on port ${port}`);
});
import express, { Request, Response } from 'express';

import exempleRoute from './router/exemple';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.json({ code: 200, status: 'OK', dateTime: new Date().toISOString() });
});

app.use('/api/exemples', exempleRoute);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
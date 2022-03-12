import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.json({ code: 200, status: 'OK', dateTime: new Date().toISOString() });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
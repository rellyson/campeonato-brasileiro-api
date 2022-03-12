import express, { Request, Response, Router } from 'express';
let router = Router();

let exemples = [{
    id: '2d53a2d53d2d5a32d1f5d3a2d',
    name: 'Exemple 1',
}, {
    id: '2d53a2d5d2d52s21fd2d2s2sss',
    name: 'Exemple 2',
}];

router.get('/', (req: Request, res: Response) => res.json(exemples));

export default router;
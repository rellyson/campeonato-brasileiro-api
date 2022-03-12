import { Request, Response, Router } from 'express';
let router = Router();

let teams = [
    {
        id: '2d53a2d53d2d5a32d1f5d3a2d',
        name: 'América Mineiro',
        city: 'BH',
        state: 'MG',
        country: 'BR',
        stadium: 'Independência',
    },
    {
        id: '2d53a2d5d2d52s21fd2d2s2sss',
        name: 'Athletico Paranaense',
        city: 'BH',
        state: 'MG',
        country: 'BR',
        stadium: 'Independência',
    },
];

router.get('/', (req: Request, res: Response) => res.json(teams));

export default router;
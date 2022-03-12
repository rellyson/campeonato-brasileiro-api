import { Router } from 'express';
import { TeamController } from '../controllers/team';
let router = Router();

let controller = TeamController.bootstrap();

router.get('/', controller.getAll);

export default router;
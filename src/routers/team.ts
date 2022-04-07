import { Router } from 'express';
import { TeamController } from '../controllers/team';

let router = Router();
let controller = TeamController.bootstrap();

router.get('/', controller.getAll);
router.get('/:id', controller.findOne);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;
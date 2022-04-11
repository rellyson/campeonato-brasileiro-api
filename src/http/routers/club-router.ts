import { Router } from 'express';
import { ClubController } from '../../controllers/club-controller';
import { ClubService } from '../../services/club-service';

const service = new ClubService();
const controller = new ClubController(service);
const clubRouter = Router();

clubRouter.get('/', controller.getAll);
clubRouter.get('/:id', controller.findOne);
clubRouter.post('/', controller.create);
clubRouter.put('/:id', controller.update);
clubRouter.delete('/:id', controller.delete);

export default clubRouter;
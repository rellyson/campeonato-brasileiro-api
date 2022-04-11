import { Router } from 'express';
import { TeamController } from '../../controllers/team-controller';
import { TeamService } from '../../services/team-service';

const service = new TeamService();
const controller = new TeamController(service);
const teamRouter = Router();

teamRouter.get('/', controller.getAll);
teamRouter.get('/:id', controller.findOne);
teamRouter.post('/', controller.create);
teamRouter.put('/:id', controller.update);
teamRouter.delete('/:id', controller.delete);

export default teamRouter;
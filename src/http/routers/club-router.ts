import { Router } from 'express';
import { ClubController } from '../../controllers/club-controller';
import { ClubService } from '../../services/club-service';

const service = new ClubService();
const controller = new ClubController(service);
const clubRouter = Router();

clubRouter.get('/', controller.getAllClubs);
clubRouter.get('/:id', controller.getClubById);
clubRouter.post('/', controller.createClub);
clubRouter.put('/:id', controller.update);
clubRouter.delete('/:id', controller.delete);

export default clubRouter;
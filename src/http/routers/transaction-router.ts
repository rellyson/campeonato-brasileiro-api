import { Router } from 'express';
import { TransactionController } from '../../controllers/transaction-controller';

const controller = new TransactionController();
const transactionRouter = Router();

transactionRouter.get('/', controller.getAll);
transactionRouter.get('/:id', controller.findOne);
transactionRouter.post('/', controller.create);
transactionRouter.put('/:id', controller.update);
transactionRouter.delete('/:id', controller.delete);

export default transactionRouter;
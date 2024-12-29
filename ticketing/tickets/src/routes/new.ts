  import express, { Request, Response, NextFunction } from 'express';
  import { body } from 'express-validator';
  import { requireAuth, validateRequest } from '@abticketing/common';
  import { Ticket } from '../models/ticket-model';
  const router = express.Router();
  router.post(
    '/api/tickets',
    requireAuth,
    [
      body('title').not().isEmpty().withMessage('Title is must be provided  '),
      body('price')
        .isFloat({ gt: 0 })
        .withMessage('Password must be greater than zero'),
    ],
    validateRequest,
    async (req: Request, res: Response, next: NextFunction) => {
      const { title, price } = req.body;
      const ticket = await Ticket.build({
        title,
        price,
        userid: req.currentUser!.id,
      });
      await ticket.save();
      res.status(201).send(ticket);
    }
  );
  export { router as createTicketRouter };

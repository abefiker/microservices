import express, { Request, Response } from 'express';
import { Ticket } from '../models/ticket-model';
import { body } from 'express-validator';
import {
  NotAuthorizedError,
  NotFoundError,
  requireAuth,
  validateRequest,
} from '@abticketing/common';

const router = express.Router();

router.put(
  '/api/tickets/:id',
  [
    body('title').not().isEmpty().withMessage('Title is must be provided  '),
    body('price')
      .isFloat({ gt: 0 })
      .withMessage('Password must be greater than zero'),
  ],
  validateRequest,
  requireAuth,
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const ticket = await Ticket.findById(id);
    if (!ticket) {
      throw new NotFoundError();
    }
    if (ticket.userid !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }
    ticket.set({
      title: req.body.title,
      price: req.body.price,
    });
    await ticket.save();
    res.status(200).send(ticket);
  }
);

export { router as updateTicketRouter };

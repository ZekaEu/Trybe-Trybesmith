import { Request, Response, NextFunction } from 'express';
import { Products, Users } from '../interfaces';

export default class Validations {
  public nameCheck = (req: Request, res: Response, next: NextFunction): Response
  | undefined => {
    const { name }: Products = req.body;
    if (!name) return res.status(400).json({ error: 'Name is required' });
    if (typeof name !== 'string') {
      return res.status(422).json({ error: 'Name must be a string' });
    }
    if (name.length < 3) {
      return res.status(422).json({ error: 'Name must be longer than 2 characters' });
    }
    next();
  };

  public amountCheck = (req: Request, res: Response, next: NextFunction): Response
  | undefined => {
    const { amount }: Products = req.body;
    if (!amount) return res.status(400).json({ error: 'Amount is required' });
    if (typeof amount !== 'string') {
      return res.status(422).json({ error: 'Amount must be a string' });
    }
    if (amount.length < 3) {
      return res.status(422).json({ error: 'Amount must be longer than 2 characters' });
    }
    next();
  };

  public usernameCheck = (req: Request, res: Response, next: NextFunction): Response
  | undefined => {
    const { username }: Users = req.body;
    if (!username) return res.status(400).json({ error: 'Username is required' });
    if (typeof username !== 'string') {
      return res.status(422).json({ error: 'Username must be a string' });
    }
    if (username.length < 3) {
      return res.status(422).json({ error: 'Username must be longer than 2 characters' });
    }
    next();
  };

  public classeCheck = (req: Request, res: Response, next: NextFunction): Response
  | undefined => {
    const { classe }: Users = req.body;
    if (!classe) return res.status(400).json({ error: 'Classe is required' });
    if (typeof classe !== 'string') {
      return res.status(422).json({ error: 'Classe must be a string' });
    }
    if (classe.length < 3) {
      return res.status(422).json({ error: 'Classe must be longer than 2 characters' });
    }
    next();
  };

  public levelCheck = (req: Request, res: Response, next: NextFunction): Response
  | undefined => {
    const { level }: Users = req.body;
    if (!level && level !== 0) return res.status(400).json({ error: 'Level is required' });
    if (typeof level !== 'number') {
      return res.status(422).json({ error: 'Level must be a number' });
    }
    if (level <= 0) {
      return res.status(422).json({ error: 'Level must be greater than 0' });
    }
    next();
  };

  public passwordCheck = (req: Request, res: Response, next: NextFunction): Response
  | undefined => {
    const { password }: Users = req.body;
    if (!password) return res.status(400).json({ error: 'Password is required' });
    if (typeof password !== 'string') {
      return res.status(422).json({ error: 'Password must be a string' });
    }
    if (password.length < 8) {
      return res.status(422).json({ error: 'Password must be longer than 7 characters' });
    }
    next();
  };
}

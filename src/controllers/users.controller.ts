import { Request, Response } from 'express';
import UsersService from '../services/users.service';

class UsersController {
  constructor(private usersService = new UsersService()) { }

  public create = async (req: Request, res: Response) => {
    const token = await this.usersService.create(req.body);
    if (!token) return res.status(400).json({ message: 'Wrong fields' });
    return res.status(201).json({ token });
  };
}

export default UsersController;

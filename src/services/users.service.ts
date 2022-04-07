import connection from '../models/connection';
import UsersModel from '../models/users.model';
import { Users } from '../interfaces';
import auth from './auth';

class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async create(user: Users) {
    const result = await this.model.create(user);
    if (result.id) {
      return auth(user);
    }
    return result;
  }
}

export default UsersService;

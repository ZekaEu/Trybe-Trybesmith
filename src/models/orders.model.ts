import { Pool } from 'mysql2/promise';
import { Orders } from '../interfaces';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Orders[]> {
    const [result] = await this.connection.execute('SELECT * FROM Trybesmith.Orders');
    return result as Orders[];
  }
}

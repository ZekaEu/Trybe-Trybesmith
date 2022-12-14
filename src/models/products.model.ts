import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Products } from '../interfaces';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Products[]> {
    const result = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    const [rows] = result;
    return rows as Products[];
  }

  public async getById(id: number): Promise<Products[]> {
    const [result] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products WHERE orderId = ?;',
      [id],
    );
    return result as Products[];
  }

  public async create(product: Products) {
    const { name, amount } = product;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const { insertId } = result;
    return { item: { id: insertId, ...product } };
  }
}

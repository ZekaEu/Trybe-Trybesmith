import connection from '../models/connection';
import ProductsModel from '../models/products.model';
import { Products } from '../interfaces';

class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async getAll(): Promise<Products[]> {
    const products = await this.model.getAll();
    return products;
  }

  public async create(product: Products) {
    const result = await this.model.create(product);
    console.log(result);
    return result;
  }
}

export default ProductsService;

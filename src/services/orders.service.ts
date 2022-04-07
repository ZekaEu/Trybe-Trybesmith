import connection from '../models/connection';
import ProductsModel from '../models/products.model';
import OrdersModel from '../models/orders.model';
import { Products, OrdersArr } from '../interfaces';

class OrdersService {
  public ordersModel: OrdersModel;

  public productsModel: ProductsModel;

  constructor() {
    this.ordersModel = new OrdersModel(connection);
    this.productsModel = new ProductsModel(connection);
  }

  public async getAll(): Promise<OrdersArr[]> {
    const orders = await this.ordersModel.getAll();
    const results = orders.map(async (order) => {
      if (order.id) {
        const productsArr: Products[] = await this.productsModel.getById(order.id);
        const products = productsArr.map((product: Products) => product.id);
        return { ...order, products } as OrdersArr;
      }
      return { ...order, products: [] } as OrdersArr;
    });
    console.log(results);
    const result = await Promise.all(results);
    return result;
  }
}

export default OrdersService;

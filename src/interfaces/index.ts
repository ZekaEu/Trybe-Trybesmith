interface Users {
  id?: number;
  username: string;
  classe: string;
  level: number;
  password: string
}

interface Orders {
  id: number;
  userId: number
}

interface Products {
  id?: number;
  name: string;
  amount: string;
  orderId?: number | null;
}

interface OrdersArr {
  id?: number;
  userId?: number;
  products: number[];
}

export {
  Users,
  Orders,
  Products,
  OrdersArr,
};

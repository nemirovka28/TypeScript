class Product {
  constructor(public id: number, public title: string, public price: number) {}
}

class Delivery {
  constructor(public date: Date) {}
}

class HomeDelivery extends Delivery {
  constructor(date: Date, public address: string) {
    super(date);
  }
}

class ShopDelivery extends Delivery {
  constructor(public shopId: number) {
    super(new Date());
  }
}

type DeliveryOptinos = HomeDelivery | ShopDelivery;

class Cart {
  private products: Product[] = [];
  private delivery: DeliveryOptinos | undefined;

  public addProduct(product: Product): void {
    this.products.push(product);
  }
  public deleteProductById(productId: number): void {
    this.products = this.products.filter((p: Product) => p.id !== productId);
  }
  public getSum(): number {
    return this.products.map((p: Product) => p.price).reduce((p1: number, p2: number) => p1 + p2);
  }
  public setDelivery(delivery: DeliveryOptinos) {
    this.delivery = delivery;
  }
  public chekOut() {
    if (this.products.length === 0) {
      throw new Error('Нет ни одного товара в корзине!!!');
    }
    if (!this.delivery) {
      throw new Error('Не указан способ доставки!!!');
    }
    return { succsess: true };
  }
}

const cart = new Cart();
cart.addProduct(new Product(1, 'coockie', 10));
cart.addProduct(new Product(2, 'chocko', 20));
cart.addProduct(new Product(3, 'milk', 30));
cart.deleteProductById(1);
cart.setDelivery(new HomeDelivery(new Date(), '3434'));
console.log(cart.getSum());
console.log(cart.chekOut());

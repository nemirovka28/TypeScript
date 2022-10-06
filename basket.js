"use strict";
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
class ShopDelivery extends Delivery {
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProductById(productId) {
        this.products = this.products.filter((p) => p.id !== productId);
    }
    getSum() {
        return this.products.map((p) => p.price).reduce((p1, p2) => p1 + p2);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    chekOut() {
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

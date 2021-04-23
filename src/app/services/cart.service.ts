import { Injectable } from '@angular/core';
import { cartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){
    let item = CartItems.find(c=>c.product.productId===product.productId) 
    if(item){  //eğer sepete eklenmeye çalışılan ürün daha önceden eklendiyse bir daha eklemek yerine adedini bir arttır
      item.quantity+=1;
    }else{
      let item = new cartItem();
      item.product=product;
      item.quantity=1;
      CartItems.push(item)
    }}

    removeFromCart(product:Product){
      let item = CartItems.find(c=>c.product.productId===product.productId) 
      CartItems.splice(CartItems.indexOf(item),1);  //js'de splice metodu belirtilen indexten itibaren 1 elemanı diziden çıkarır
    }

    list():cartItem[]{  // sepet verileri veritabanından değil, CartItems const'undan gelecek
      return CartItems; 
    }

}

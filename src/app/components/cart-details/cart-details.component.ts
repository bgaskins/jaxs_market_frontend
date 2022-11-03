import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../common/cart-item';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }

  incrementQuantity(theCartItem: CartItem) {
    this.cartService.addToCart(theCartItem);
  }

  decrementQuantity(theCartItem: CartItem) {
    this.cartService.decrementQuantity(theCartItem);
  }

  deleteFromCart(theCartItem: CartItem) {
    this.cartService.deleteFromCart(theCartItem);
  }

  listCartDetails() {


    this.cartItems = this.cartService.cartItems;

    // Get the total price
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    // get the total quantity
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

    // Compute total price and total quantity 
    this.cartService.computeCartTotals();
  }

}
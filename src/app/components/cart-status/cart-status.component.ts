import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {

  totalPrice: number = 0.00;
  totalQuantity: number = 0;
  faBasketShopping = faBasketShopping;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }

  updateCartStatus() {
    // subscribe to the cart totalPrice
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );
    // Subscribe to the total quantity of tickets in cart
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );
  }

}

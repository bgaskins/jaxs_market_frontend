import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup!: FormGroup;
  
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private formBuilder: FormBuilder, private cartService: CartService) { }

  ngOnInit(): void {
    
    this.reviewCartDetails();

    this.checkoutFormGroup= this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: [''],
      }),

      mailingAddress: this.formBuilder.group({
        address: [''],
        city: [''],
        state: [''],
        country: [''],
        zipcode: [''],
      }),

      billingAddress: this.formBuilder.group({
        address: [''],
        city: [''],
        state: [''],
        country: [''],
        zipcode: [''],
      }),

      creditCard: this.formBuilder.group({
        cardType: [''],
        nameOnCard: [''],
        cardNumber: [''],
        securityCode: [''],
        expMonth: [''],
        expYear: [''],

      })
    });
}

reviewCartDetails() {
  this.cartService.totalQuantity.subscribe(
    totalQuantity => this.totalQuantity = totalQuantity
  );
  this.cartService.totalPrice.subscribe(
    totalPrice => this.totalPrice = totalPrice
  );
}

copyMailingAddressToBilling(event:any) {
  if(event.target.checked) {
    this.checkoutFormGroup.controls.billingAddress.setValue(this.checkoutFormGroup.controls.mailingAddress.value);
  } else {
    this.checkoutFormGroup.controls.billingAddress.reset();
  }
}

onSubmit() {
  console.log("Working to submit form");
  console.log(this.checkoutFormGroup.get('customer')?.value);
}

}

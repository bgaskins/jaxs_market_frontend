import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  productCategories: ProductCategory[] = [];
  faBars = faBars;

  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
    this.listProductCategories();
  }

  listProductCategories() {

    //Logging info from service
    this.productService.getProductCategories().subscribe(
      data => {
        console.log('Product Categories=' + JSON.stringify(data));
        this.productCategories = data;
      }
    );
  }



  toggleNavList(action: string) {// this function opening the side menu in the mobile screen

    action == 'open' ?
      document.querySelector('.nav-list')?.classList.add('active')
      : document.querySelector('.nav-list')?.classList.remove('active');

  }

}

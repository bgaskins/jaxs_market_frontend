import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../common/product-category';
import { ProductServiceService } from '../../services/product-service.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.css']
})
export class ProductCategoryMenuComponent implements OnInit {

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


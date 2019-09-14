import { ProductService } from './product-service.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.interface';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private _listFilter: string = 'cart';
  private _productService;

  pageTitle: string = 'Products List';
  imgWidth: number = 50;
  imgMargin: number = 2;
  showImage: boolean = false;
  filteredProducts: IProduct[];
  products: IProduct[] = [];

  constructor(productService: ProductService) { 
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }

  ngOnInit() {

  }

  public get listFilter(): string {
    return this._listFilter;
  }

  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    
    return this.products.filter((product: IProduct) => 
      product.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}

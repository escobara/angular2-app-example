import {Component} from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

import { IProduct } from './product';
import { ProductService } from './product.service';
import { StarComponent } from '../shared/star.component';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailComponent {
    pageTitle: 'Title Goes Here';

    
}
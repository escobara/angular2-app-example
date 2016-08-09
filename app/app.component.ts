import {Component} from "angular2/core";
import {ProductListComponent} from 'app/products/product-list.component';
import { ProductService } from 'app/products/product.service';


@Component({
    selector: 'pm-app',
    templateUrl: 'app/app.component.html',
    directives: [ProductListComponent],
    providers: [ProductService]
})

export class AppComponent {
    pageTitle: string = "UAE Student Mgmt";
    
    getTitle(): string {
        
    }
}
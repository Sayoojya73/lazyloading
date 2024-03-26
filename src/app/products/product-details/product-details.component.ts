import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataaService } from '../services/dataa.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId!: number; 
  product: any; 

  constructor(private route: ActivatedRoute, private dataService: DataaService) { }

  ngOnInit(): void {
   
    this.productId = +this.route.snapshot.paramMap.get('id')!; 
    
    this.product = this.dataService.getProductById(this.productId);
  }
}


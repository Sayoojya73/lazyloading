import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  furnitureItems = [
    { id: 1, name: 'Black Sofa-Bed', price: 59990, imageUrl: 'https://img.freepik.com/premium-photo/stylish-dark-living-room-interior-background-black-wall-scandinavian-style-3d-illustration-living-room-mockup-3d-rendering_208753-229.jpg', description: 'Stylish black sofa-bed for your living room.' },
    { id: 2, name: 'Dining Table - 4 Seater', price: 19990, imageUrl: 'https://i.pinimg.com/736x/61/e3/85/61e385bc18fc56ea7f47a495a15dd619.jpg', description: 'Elegant dining table for a family of four.' },
    { id: 3, name: '3-Seater Sofa', price: 35100, imageUrl: 'https://media.istockphoto.com/id/1147086081/photo/modern-concept-interior-design-of-black-and-grey-living-room-3d-render.jpg?s=170667a&w=0&k=20&c=52RruDDy9N6okXG0gYaNztK2ELUZ2jygbmBDO_DAqrM=', description: 'Comfortable and stylish 3-seater sofa.' },
    { id: 4, name: 'Dining Table - 4 Seater', price: 19990, imageUrl: 'https://i.pinimg.com/736x/61/e3/85/61e385bc18fc56ea7f47a495a15dd619.jpg', description: 'Elegant dining table for a family of four.' },
    { id: 5, name: 'Modern Chandelier', price: 45390, imageUrl: 'https://www.home-designing.com/wp-content/uploads/2018/04/modern-chandelier-2.jpg', description: 'Stunning modern chandelier for your home.' },
    { id: 6, name: 'Queen Bed', price: 55190, imageUrl: 'https://i.pinimg.com/1200x/27/94/87/279487db9ee857836c714166630246d7.jpg', description: 'Luxurious queen-sized bed for ultimate comfort.' },
    { id: 7, name: 'Storage Ottoman', price: 15390, imageUrl: 'https://www.furnituremaxi.com/cdn/shop/files/metalgrey1_1080x.jpg?v=1692610933', description: 'Versatile storage ottoman for your living space.' },
    { id: 8, name: 'Revolving Chair', price: 7190, imageUrl: 'https://images.woodenstreet.de/image/data/da-urban/bondway-black-high-back-office-revolving-chair/updated/7.jpg', description: 'Ergonomic revolving chair for your office.' }
  ];
  
  

}

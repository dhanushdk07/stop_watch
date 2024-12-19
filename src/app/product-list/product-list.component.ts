// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-product-list',
//   standalone: true,
//   imports: [],
//   templateUrl: './product-list.component.html',
//   styleUrl: './product-list.component.css'
// })
// export class ProductListComponent {

// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    {
      image: 'assets/img/BOMAKER-100W-Computer-Speakers-1.jpg',
      alt: 'img1',
      description: 'Sleek, Slim Soundbar & Solid Wallet-friendly: The best soundbars you can buy in 2022.',
      quantity: 0
    },
    {
      image: 'assets/img/BOMAKER-100W-Computer-Speakers-2.jpg',
      alt: 'img2',
      description: 'BOMAKER 100W Computer Speakers Bluetooth 5.0 Wired Loudspeaker 3D Surround Soundbar Speaker with Subwoofer.',
      quantity: 0
    },
    {
      image: 'assets/img/Faijul-Islam.jpg',
      alt: 'img3',
      description: 'A Graphic Designer, Graduated on Graphic Design.',
      quantity: 0
    }
  ];

  get totalQuantity() {
    return this.products.reduce((sum, product) => sum + product.quantity, 0);
  }

  increaseQuantity(index: number) {
    this.products[index].quantity++;
  }

  decreaseQuantity(index: number) {
    if (this.products[index].quantity > 0) {
      this.products[index].quantity--;
    }
  }
} ```


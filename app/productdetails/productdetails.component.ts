import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  Products = [
    {
      "img": "assets/images/image43.svg",
      "price": "1499",
      "name": "Faaddiction Mens Casual Shirt Printed Rayon ",
      "address" : "Road Number 34,Madhapur",
      "cust":"500+ bought this"
  },
  {
    "img": "assets/images/image43.svg",
    "price": "Start from 499",
    "name": "Soft Teddy Bear",
    "address" : "Road Number 34,Madhapur",
    "cust":"500+ bought this"
  },
  {
  "img": "assets/images/image43.svg",
  "price": "22,477",
  "name": "Rings",
  "address" : "Road Number 34,Madhapur",
  "cust":"500+ bought this"
  },
  {
  "img": "assets/images/image43.svg",
  "price": "450",
  "name": "TLF Men's Casual Printed Multi Color Linen Cotton...",
  "address" : "Road Number 34,Madhapur",
  "cust":"500+ bought this"
  },
  {
  "img": "assets/images/image43.svg",
  "price": "22,477",
  "name": "Rings",
  "address" : "Road Number 34,Madhapur",
  "cust":"500+ bought this"
  }
  ];
  productOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    margin:10,
    navText: ['<i class="las la-angle-left"></i>', '<i class="las la-angle-right"></i>'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      760: {
        items: 4
      },
      1000: {
        items: 4
      }
    },
    nav: false
  };
  constructor(private notifyService : ToastrService) { }

  ngOnInit(): void {
  }
  addCart(){
    this.notifyService.success("Item Added to cart !!", "");
  }
  addWishlist(){
    this.notifyService.success("Item Added to Wishlist !!", "");
  }
}

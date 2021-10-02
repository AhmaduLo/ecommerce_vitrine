import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pull',
  templateUrl: './pull.component.html',
  styleUrls: ['./pull.component.scss']
})
export class PullComponent implements OnInit {
  images: any[] = [];
  info_Clothing:any;
  see_info_article:boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.images[0] = {
      url:
        "https://i.pinimg.com/564x/00/75/00/00750029bd3f5efb6ab4d54d5db6e9b6.jpg",
      prix: "40$",
      description: "Men'S New 2017 Handsome Wanderer Plaid A528 3D Pullover Printed Over Unisex Hoodie",
    };

    this.images[1] = {
      url:
        "https://i.pinimg.com/564x/b7/27/39/b727390f06220cf0e399380d3a23b8bb.jpg",
      prix: "35$",
      description: "Men'S Cotton/Polyester Paris A764 3D Pullover Printed Over Unisex Hoodie",
    };

    this.images[2] = {
      url:
        "https://i.pinimg.com/564x/e7/5c/79/e75c790473f13a03aced14631d767fb5.jpg",
      prix: "24$",
      description: "pullover",
    };

    this.images[3] = {
      url:
        "https://i.pinimg.com/564x/82/71/d9/8271d97818b9e54e6c258ad15fc03c49.jpg",
      prix: "30$",
      description: "DICK'S Sporting Goods - Official Site - Every Season Starts at DICK'S",
    };
    
    this.images[4] = {
      url:
        "https://i.pinimg.com/564x/81/59/1b/81591be3de6fb50cf15bc2083d444845.jpg",
      prix: "24$",
      description: "Jordan Little Boys Dri-fit Streak Zip-Up Hoodie - Black",
    };

    this.images[5] = {
      url:
        "https://i.pinimg.com/564x/01/80/76/01807659232afc47db274d07ce31fa8d.jpg",
      prix: "32$",
      description: "pull",
    };

    this.images[6] = {
      url:
        "https://i.pinimg.com/236x/7a/97/a2/7a97a20cb6994c7eb64104de8908f24b.jpg",
      prix: "25$",
      description: "#becausesneakers | Sneakers, Apparel & More",
    };

    this.images[7] = {
      url:
        "https://i.pinimg.com/564x/91/93/9b/91939bfe4b2f8585b916e7e3abb7298a.jpg",
      prix: "25$",
      description: "pullover strong",
    };

    this.images[8] = {
      url:
        "https://i.pinimg.com/564x/bd/21/c6/bd21c67b5b55223dc029b3b812fdefa1.jpg",
      prix: "46$",
      description: "Jordan Men's Sportswear Jumpman Fleece Hoodie",
    };

    this.images[9] = {
      url:
        "https://i.pinimg.com/564x/2a/fb/a7/2afba76384c736e997d62e914d6532fd.jpg",
      prix: "45$",
      description: "Spektar Urban Sportswear: Men’s Tactical Hoodie",
    };

    this.images[10] = {
      url:
        "https://i.pinimg.com/564x/d5/fd/1a/d5fd1a906601f305a5097d53095e1bf5.jpg",
      prix: "50$",
      description: "G-Star RAW® | Shop Raw Denim for Men and Women",
    };

    this.images[11] = {
      url:
        "https://i.pinimg.com/564x/81/12/3d/81123de2ada3501e6360e03c5af1f43d.jpg",
      prix: "50$",
      description: "Hoodies + Sweatshirts for Men",
    };

    this.images[12] = {
      url:
        "https://i.pinimg.com/564x/12/55/e0/1255e04e7bff1d9f708bcf9f0efd6ac6.jpg",
      prix: "36$",
      description: "Men's Jackets & Coats | Forever 21 | Forever 21",
    };

    this.images[13] = {
      url:
        "https://i.pinimg.com/564x/68/d0/1f/68d01f1f65890ed6c8d7db692197cfed.jpg",
      prix: "52$",
      description: "USD$20.17 Fashion 2020 New Jackets Men Casual Patchwork Outwear Zipper Bomber Jacket Male Outwear Coat Hip Hop Baseball jacket Streetwear",
    };

    this.images[14] = {
      url:
        "https://i.pinimg.com/564x/c6/48/3f/c6483f0e91461de9dadd4d2b4a8e4baf.jpg",
      prix: "75$",
      description: "swag style",
    };

    this.images[15] = {
      url:
        "https://i.pinimg.com/564x/45/2e/a7/452ea7620425362a32eee473ce75c353.jpg",
      prix: "65",
      description: "Workwear jacket men's Hooded Jacket+Pants 2PC Sets baseball loose Pullover coat & Long Pants Mens Clothing|Men's Sets| - AliExpress",
    };
  }

  
  buy_article(i:any){
    this.info_Clothing=this.images[i]
    this.see_info_article=true;
    //console.log(this.info_Clothing);
    
   }
   delet_info(){
     this.see_info_article=false;
   }

}

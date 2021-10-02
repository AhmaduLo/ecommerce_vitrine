import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.scss']
})
export class ClothingComponent implements OnInit {
  images: any[] = [];
  info_Clothing:any;
  see_info_article:boolean = false;
  constructor() { }

  ngOnInit(): void {
    
    
    this.images[0] = {
      id:0,
      url:
        "https://i.pinimg.com/564x/32/d6/bb/32d6bba4188282d844537c5fbf25c6a8.jpg",
      prix: "45$",
      description: "Brand Designer Men Short Sleeve Camouflage T-shirt",
    };

    this.images[1] = {
      id:1,
      url:
        "https://i.pinimg.com/564x/a0/76/67/a0766728e53e6dea098c5536b5358ae9.jpg",
      prix: "100$",
      description: "Men'S T-Shirt White Black Tshirt Top Tees Hip Hop Plus Size M-4Xl 5Xl O Neck 3123",
    };
    this.images[2] = {
      url:
        "https://i.pinimg.com/564x/79/8d/7f/798d7fec6aca98d9013ffef4d2054d0b.jpg",
      prix: "325$",
      description: "New 2 Piece Men's Suits Short Sleeve T-shirt & Pants",
    };

    this.images[3] = {
      url:
        "https://i.pinimg.com/564x/23/54/39/2354395bdc300824e477b3960c958472.jpg",
      prix: "45$",
      description: "TECHNICAL SPORTY T-SHIRT",
    };

    this.images[4] = {
      url:
        "https://i.pinimg.com/236x/57/13/68/5713684ef9fd8f9faaa93bcf382756f1.jpg",
      prix: "30$",
      description: "DOUBLE SLEEVE ATHLETIC SHIRT",
    };

    this.images[5] = {
      url:
        "https://i.pinimg.com/236x/9b/c9/48/9bc948045770b717613763818d81c5f1.jpg",
      prix: "25$",
      description: "COMBINED ZIP T-SHIRT",
    };

    this.images[6] = {
      url:
        "https://i.pinimg.com/564x/f3/a1/eb/f3a1eb63b6c716b78da5eb38efecd353.jpg",
      prix: "75$",
      description: "ASOS Dark Future oversized longline t-shirt with colour block sleeve and high build print | ASOS",
    };

    this.images[7] = {
      url:
        "https://i.pinimg.com/236x/ff/34/1b/ff341b1afc6b2ea875ccb9489f799937.jpg",
      prix: "75$",
      description: "New Balance - Athletics - Sweat - Blanc | ASOS",
    };

    this.images[8] = {
      url:
        "https://i.pinimg.com/236x/6f/84/42/6f8442571d5407ebe26a723819f066f7.jpg",
      prix: "35$",
      description: "ASOS Dark Future colour block t-shirt with contrast neck and Dark Future logo embroidery | ASOS",
    };

    this.images[9] = {
      url:
        "https://i.pinimg.com/236x/a5/1c/81/a51c81058acad84e2195e70f00a6941c.jpg",
      prix: "59.25$",
      description: "Carrinos Boy Sweatshirt-3401030268040050061328 038",
    };

    this.images[10] = {
      url:
        "https://i.pinimg.com/236x/93/81/d4/9381d4cbe409c54d164e0ad17e386936.jpg",
      prix: "32$",
      description: "Homme Unisexe Tee T-shirt",
    };

    this.images[11] = {
      url:
        "https://i.pinimg.com/236x/bb/08/7c/bb087cdc01147423589c5e59cfd7d85b.jpg",
      prix: "29,52$",
      description: "FREE SHIPPING Hip hop Hole Short sleeve T shirt Men O neck Black White Patchwork Tees Streetwear JKP3779",
    };

    this.images[12] = {
      url:
        "https://i.pinimg.com/236x/dd/9a/2d/dd9a2d0ee2260adecdc27298c98a7af3.jpg",
      prix: "75$",
      description: "Guys Striped Side Slogan Graphi",
    };

    this.images[13] = {
      url:
        "https://i.pinimg.com/236x/67/5a/ef/675aef52c39e701f9e4961c51cca8a22.jpg",
      prix: "30$",
      description: "32.88US $ 40% OFF|Men's",
    };

    this.images[14] = {
      url:
        "https://i.pinimg.com/236x/4a/8b/c3/4a8bc388dd82b4c8a4c57a9763c94f21.jpg",
      prix: "75$",
      description: "Kit Lab",
    };

    this.images[15] = {
      url:
        "https://i.pinimg.com/236x/00/7d/10/007d10e91aba09a2d83912a3c5bde91a.jpg",
      prix: "30$",
      description: "(Black) Splash Ink Korean / Korea",
    };

    this.images[16] = {
      url:
        "https://i.pinimg.com/236x/6f/67/36/6f67362991e7abc15a82b349e495a81f.jpg",
      prix: "25$",
      description: "Unisex Graffiti Cotton O-Neck",
    };

    this.images[17] = {
      url:
        "https://i.pinimg.com/236x/34/df/e1/34dfe108b5065327fd982e0115ce259c.jpg",
      prix: "$40",
      description: "T-shirt décontracté 100% coton",
    };

    this.images[18] = {
      url:
        "https://i.pinimg.com/236x/32/84/51/328451db1f704d3590972f2455206978.jpg",
      prix: "25$",
      description: "18% OFF|Casual",
    };

    this.images[19] = {
      url:
        "",
      prix: "",
      description: "MAN Signature Velour T-Shirt With Sports Rib | BoohooMAN",
    };

    this.images[20] = {
      url:
        "https://i.pinimg.com/236x/57/51/58/575158396e4c0b9d305e25fa88a4d6e9.jpg",
      prix: "40$",
      description: "",
    };

    this.images[21] = {
      url:
        "https://i.pinimg.com/236x/53/3f/89/533f893c41635801d0c9f7a021a476a8.jpg",
      prix: "40$",
      description: "Hoodies Streetwear New Korean Style Half Sleeve Hooded",
    };

    this.images[22] = {
      url:
        "https://i.pinimg.com/236x/2d/33/42/2d3342a225bd8f1df3ac8a1d65e07c8a.jpg",
      prix: "23$",
      description: "Top Streetwear: Streetwear, Hip",
    };

    // this.images[23] = {
    //   url:
    //     "",
    //   prix: "",
    //   description: "",
    // };
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

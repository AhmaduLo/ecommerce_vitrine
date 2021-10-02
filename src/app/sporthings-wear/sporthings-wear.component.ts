import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sporthings-wear',
  templateUrl: './sporthings-wear.component.html',
  styleUrls: ['./sporthings-wear.component.scss']
})
export class SporthingsWearComponent implements OnInit {
  images: any[] = [];
  info_shoes:any;
  see_info_article:boolean = false;
  constructor() { }

  ngOnInit(): void {
      
    this.images[0] = {
      id:0,
      url:
        "https://i.pinimg.com/564x/29/2e/fa/292efa42650a3e17076fa00fd76d956c.jpg",
      prix: "75$",
      description: "base layers for skiing or snowboarding - GREEN SET / M",
    };

    this.images[1] = {
      url:
        "https://i.pinimg.com/236x/97/a6/8e/97a68e5e0d5c862abfd8e3a392eb4024.jpg",
      prix: "45$",
      description: "9.17US $ 28% OFF|Rashguard Männer Compression Sportswear",
    };

    this.images[2] = {
      url:
        "https://i.pinimg.com/564x/79/79/cc/7979cc75335e6919ee6563877ae5fbac.jpg",
      prix: "52$",
      description: "Workout Outfits Compression Suit Athletic Athleisure 5pcs Elastane Quick Dry Breathable Soft Fitness Gym Workout Basketball Active Training Sportswear Solid Color Normal Hoodie",
    };

    this.images[3] = {
      url:
        "https://i.pinimg.com/564x/c8/6b/dd/c86bdd0c050b6f95c3fc1983065b5b8c.jpg",
      prix: "39$",
      description: "OFF|Rashguard Männer Compression Sportswear Set Gym Rennen Sport Kleidung Jogging Strumpfhosen Trainingsanzug Fitness T Shirt Windjacke Leggings|men running suit|running suitrunning clothing men - AliExpress",
    };

    this.images[4] = {
      url:
        "https://i.pinimg.com/564x/23/0c/c9/230cc9ff7ba16c0302da26b8f996b982.jpg",
      prix: "60$",
      description: "3pcs Sport Suit Men's Sport Running Suits Running Homme Gym Hoodie Training Running Tracksuits Men Gym Clothing | Wish ",
    };

    this.images[5] = {
      url:
        "https://i.pinimg.com/564x/e6/a7/eb/e6a7eb3d3764d472203b7a5dccfcadc1.jpg",
      prix: "50$",
      description: "Online shopping for Mens Leggings with free worldwide shipping",
    };

    this.images[6] = {
      url:
        "https://i.pinimg.com/564x/0d/33/1d/0d331daf8da0ef33716a75783babb28a.jpg",
      prix: "15$",
      description: "Crossfit Long Sleeve Mens Gym & Fitness T-Shirt - Men's Fitness Apparel, Men's Sports & Fitness T Shirts | Vivinch",
    };

    this.images[7] = {
      url:
        "https://i.pinimg.com/564x/22/f4/0c/22f40cf67979762d4a7d04f298606576.jpg",
      prix: "25$",
      description: "Nike Running Air Pack Challenger shorts in black | ASOS",
    };

    this.images[8] = {
      url:
        "https://i.pinimg.com/564x/f0/8c/f9/f08cf920c9bdbe8f0fa6593b89e977f8.jpg",
      prix: "28$",
      description: "SPRING STAFF GYM STYLE",
    };

    this.images[9] = {
      url:
        "https://i.pinimg.com/564x/ce/9c/85/ce9c8538533dfa7de6e9d8f6772f65ee.jpg",
      prix: "22$",
      description: "KAIA GERBER and Jacob Elordi at Earthbar in West Hollywood 12/02/2020",
    };

    this.images[10] = {
      url:
        "https://i.pinimg.com/564x/a0/80/cb/a080cb0647f75d6a19a954a0ab86c611.jpg",
      prix: "20$",
      description: "5 TIPOS de TECIDOS para CAMISETAS: Qual escolher pra usar no dia a dia?",
    };

    this.images[11] = {
      url:
        "https://i.pinimg.com/564x/62/d9/73/62d97333be1e2692adba2abd1a768999.jpg",
      prix: "45$",
      description: "athletic apparel + technical clothing",
    };

    this.images[12] = {
      url:
        "https://i.pinimg.com/236x/18/ad/b5/18adb57cd4f3a96048234eb8469d401c.jpg",
      prix: "52$",
      description: "Luxury fashion & independent designers | SSENSE",
    };

    this.images[13] = {
      url:
        "https://i.pinimg.com/236x/2e/95/1d/2e951dc0d601745a40fdd9ee46584bfd.jpg",
      prix: "49$",
      description: "Search Results",
    };

    this.images[14] = {
      url:
        "https://i.pinimg.com/236x/14/f8/97/14f897a3058098cae0a425e240ed8046.jpg",
      prix: "50$",
      description: "Designer Women's Apparel, Men's Apparel, Shoes & Handbags - Saks.com",
    };
  }

  buy_article(i:any){
    this.info_shoes=this.images[i]
    this.see_info_article=true;
    //console.log( this.info_shoes);
    
   }
   delet_info(){
     this.see_info_article=false;
   }

}

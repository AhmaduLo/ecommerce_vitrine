import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss']
})
export class BagComponent implements OnInit {
  images: any[] = [];
  info_Clothing:any;
  see_info_article:boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.images[0] = {
      url:
        "https://i.pinimg.com/564x/fb/89/94/fb8994c983e125cd61eda9e58950c06c.jpg",
      prix: "10$",
      description: "La sacoche pour Homme de PetitsDom - Tutoriel et Patron",
    };

    this.images[1] = {
      url:
        "https://i.pinimg.com/236x/7f/fc/d3/7ffcd3d944af8337354eca04b6bb4c5b.jpg",
      prix: "25$",
      description: "DIY MODERN SHOULDER BAG/ Rectangle bag with front pocket and zipper pocket/sewing tuto",
    };

    this.images[2] = {
      url:
        "https://i.pinimg.com/236x/b4/2e/88/b42e88917995f74b59fe9bca7d628340.jpg",
      prix: "15",
      description: "{Jive & Compère} Patrons de sacoche homme et portefeuille mixte - Sacotin",
    };

    this.images[3] = {
      url:
        "https://i.pinimg.com/236x/14/f1/ca/14f1cab816df0dbe9a043db604a5aa8a.jpg",
      prix: "15$",
      description: "Crossback aus Jeanshose und Pyjama",
    };

    this.images[4] = {
      url:
        "https://i.pinimg.com/236x/4d/c2/90/4dc290a210356454c648b454441cf11f.jpg",
      prix: "18$",
      description: "*TUTORIAL* The Ultimate Voyager’s ADVENTURE Satchel",
    };

    this.images[5] = {
      url:
        "https://i.pinimg.com/236x/3b/13/7c/3b137cfc14a9567290d0133e8aeb17c6.jpg",
      prix: "20$",
      description: "Our Favorite Backpacks for Back to School Season",
    };

    this.images[6] = {
      url:
        "https://i.pinimg.com/236x/70/59/a5/7059a5488026f5d2d71743ace7eb41e4.jpg",
      prix: "25$",
      description: "Leather, bags etc.",
    };

    this.images[7] = {
      url:
        "https://i.pinimg.com/236x/41/88/b1/4188b14f421da4047edb12bd12dbd60e.jpg",
      prix: "20$",
      description: "Hipbag/Bauchtasche aus Samt",
    };

    this.images[8] = {
      url:
        "https://i.pinimg.com/236x/3b/48/74/3b487464d35330308e925221df2d7c96.jpg",
      prix: "30$",
      description: "45 Ideas De Mochilas De Jeans | Mochilas De Jeans, Mochila",
    };

    this.images[9] = {
      url:
        "https://i.pinimg.com/236x/cf/74/16/cf7416c919d316309231811f7902c267.jpg",
      prix: "20$",
      description: "Canvas Korean Style Mini Cool Backpacks For Women's Men's Unisex #JXY1262 | Touchy Styl",
    };

    this.images[10] = {
      url:
        "https://i.pinimg.com/564x/73/23/73/732373efa48c4fb8e534d8e3bdb00f97.jpg",
      prix: "35$",
      description: "Leisure Travel USB Interface Student Backpack Gray Large Waterproof Canvas School Bag",
    };

    this.images[11] = {
      url:
        "https://i.pinimg.com/236x/ec/f4/c3/ecf4c323e618d62e85d0c608612315ec.jpg",
      prix: "30$",
      description: "31 Ways To Make Traveling So Much Less Stressful",
    };

    this.images[12] = {
      url:
        "https://i.pinimg.com/564x/d8/20/18/d82018b8aedcea6dac6947b9e95488cb.jpg",
      prix: "25$",
      description: "Professional Slim Laptop Backpack",
    };

    this.images[13] = {
      url:
        "https://i.pinimg.com/564x/0f/2f/b5/0f2fb5d4ed2ed1eaa674c337f89718dc.jpg",
      prix: "40$",
      description: "traveling Bag",
    };

    this.images[14] = {
      url:
        "https://i.pinimg.com/564x/14/64/64/146464660cecc87a4151b0db08a39947.jpg",
      prix: "39$",
      description: "Burton Kilo Backpack | Burton Snowboards Fall 16",
    };

    this.images[15] = {
      url:
        "https://i.pinimg.com/564x/7f/06/ad/7f06ad0e71b0c21c17af347e8518cc11.jpg",
      prix: "40$",
      description: "Burton Kilo Backpack | Burton.com Fall 2019",
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

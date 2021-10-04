import { ServicePhotoService } from "./../service-photo.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shoes",
  templateUrl: "./shoes.component.html",
  styleUrls: ["./shoes.component.scss"],
})
export class ShoesComponent implements OnInit {
  images: any[] = [];
  images_woman:any[]=[];
  info_shoes:any;
  see_info_article:boolean = false;
  clcik:boolean = false;
  view_woman_page:boolean=false;
  cache_man_page:boolean=false;
 
  constructor() {}

  ngOnInit(): void {

    
    this.images[0] = {
      id:0,
      url:
        "https://i.pinimg.com/236x/44/53/52/44535299217125c4ff51287ffc339bf0.jpg",
      prix: "45$",
      description: "Nike shoes qualite",
    };

    this.images[1] = {
      id:1,
      url:
        "https://i.pinimg.com/236x/18/c9/7b/18c97bdc80d2035bf4893cf0c5566974.jpg",
      prix: "100$",
      description: "Nike shoes qualite",
    };
    this.images[2] = {
      id:2,
      url:
        "https://i.pinimg.com/236x/81/4a/14/814a14e15632bd617eb51130223e8b4c.jpg",
      prix: "325$",
      description: "jordan 43 size",
    };

    this.images[3] = {
      url:
        "https://i.pinimg.com/236x/ff/e6/33/ffe633422fc8b856a18da51367cb931d.jpg",
      prix: "75$",
      description: "Nike color LIDL size 42,43,44,45",
    };

    this.images[4] = {
      url:
        "https://i.pinimg.com/236x/cd/ed/c4/cdedc4a2360fdcdf929922476399c4ba.jpg",
      prix: "92$",
      description: "Nike color brown and shiny size 41, 42, 43 ",
    };
    this.images[5] = {
      url:
        "https://i.pinimg.com/236x/73/cd/3f/73cd3feff800637c1d797ce1d2570fb2.jpg",
      prix: "100$",
      description: "Nike ",
    };
    this.images[6] = {
      url:
        "https://i.pinimg.com/236x/bf/2d/d4/bf2dd444a99c39bc46a6f41c0bcfaba2.jpg",
      prix: "325$",
      description: "Shoes quality",
    };
    this.images[7] = {
      url:
        "https://i.pinimg.com/236x/37/4e/a8/374ea8f11dd541bd4926b56645f42e73.jpg",
      prix: "325$",
      description: "Shoes quality",
    };
    this.images[8] = {
      url:
        "https://i.pinimg.com/236x/1f/2c/76/1f2c7693f0f69998e643a52accf51f67.jpg",
      prix: "325$",
      description: "Shoes quality",
    };
    this.images[9] = {
      url:
        "https://i.pinimg.com/564x/2e/82/a6/2e82a6b5c2dbae1f620b544f8ea411ff.jpg",
      prix: "325$",
      description: "Shoes quality",
    };
    this.images[10] = {
      url:
        "https://i.pinimg.com/236x/09/d1/d5/09d1d5f2e260c97e686f39eb854cd350.jpg",
      prix: "325$",
      description: "Shoes quality",
    };
    this.images[11] = {
      url:
        "https://i.pinimg.com/236x/65/22/a2/6522a2376c306af76de7c364027f14de.jpg",
      prix: "325$",
      description: "Shoes quality",
    };
    this.images[12] = {
      url:
        "https://i.pinimg.com/236x/6b/fa/ee/6bfaeee2cad8b8adb0961e77f0e5fd1a.jpg",
      prix: "325$",
      description: "Shoes quality",
    };
    this.images[13] = {
      url:
        "https://i.pinimg.com/236x/bc/3b/be/bc3bbe1c05b4db1b7c61bd3d16df70b4.jpg",
      prix: "325$",
      description: "Shoes quality",
    };
    this.images[14] = {
      url:
        "https://i.pinimg.com/236x/1d/ac/24/1dac245881ddd56eaa6aec53d0be0b74.jpg",
      prix: "325$",
      description: "Shoes quality",
    };
    this.images[15] = {
      url:
        "https://i.pinimg.com/236x/1d/ac/24/1dac245881ddd56eaa6aec53d0be0b74.jpg",
      prix: "325$",
      description: "Shoes quality",
    };
    this.images[16] = {
      url:
        "https://i.pinimg.com/236x/15/ea/07/15ea0798c9256a106d329bc1b9f5136e.jpg",
      prix: "325$",
      description: "Shoes quality",
    };
    this.images[17] = {
      url:
        "https://i.pinimg.com/564x/d2/1e/5d/d21e5d88b784a2e7f010f0645a063a8b.jpg",
      prix: "325$",
      description: "Shoes quality",
    };
    this.images[18] = {
      url:
        "https://i.pinimg.com/236x/c4/05/1f/c4051f1870cd26eef148ea612d3bb855.jpg",
      prix: "325$",
      description: "Shoes quality",
    };
    this.images[19] = {
      url:
        "https://i.pinimg.com/236x/40/be/cc/40becca68b585f1a111f00392dbf8a3c.jpg",
      prix: "325$",
      description: "Shoes quality",
    };
    this.images[20] = {
      url:
        "https://i.pinimg.com/236x/ae/16/e5/ae16e5367cb1dca637e07bf57c845023.jpg",
      prix: "325$",
      description: "Shoes quality",
    };
    this.images[21] = {
      url:
        "https://i.pinimg.com/236x/e6/30/6d/e6306d6165304b98387e270034b03048.jpg",
      prix: "325$",
      description: "Shoes quality",
    };
    this.images[22] = {
      url:
        "https://i.pinimg.com/236x/9b/72/97/9b72974366e03ea5d0e334774c420744.jpg",
      prix: "325$",
      description: "Shoes quality",
    };
    this.images[23] = {
      url:
        "https://i.pinimg.com/236x/dc/18/74/dc1874a3dde0a23b2e978bd3dd1fbbf7.jpg",
      prix: "325$",
      description: "Shoes quality",
    };
    this.images[24] = {
      url:
        "https://i.pinimg.com/236x/7f/e7/30/7fe7303f2ec2b7f43f9d79352b69b4fd.jpg",
      prix: "325$",
      description: "Shoes quality",
    };
    this.images[25] = {
      url:
        "https://i.pinimg.com/236x/64/72/1f/64721ffad593937f2a2de541415664b6.jpg",
      prix: "325$",
      description: "Shoes quality",
    };
    this.images[26] = {
      url:
        "https://i.pinimg.com/236x/2f/11/bc/2f11bc6580872be52d4fbfea1e907e15.jpg",
      prix: "325$",
      description: "jordan 43 size",
    };

    this.images[27] = {
      url:
        "https://i.pinimg.com/236x/0c/e5/34/0ce534554eca4695c2f6f5dbca089e3a.jpg",
      prix: "325$",
      description: "jordan 43 size",
    };

    //---------------woman images----------------------------------------

    this.images_woman[0] = {
      url:
        "https://i.pinimg.com/236x/72/0d/2d/720d2d2a8b43a36af952f76ddc5bca29.jpg",
      prix: "145$",
      description: "Image about black in fashion by aigerim234 on We Heart It",
    };

    this.images_woman[1] = {
      url:
        "https://i.pinimg.com/236x/e1/5b/1b/e15b1b472b4f7c3b7c722eb960c26f47.jpg",
      prix: "200$",
      description: "damn dis shit fireee",
    };

    this.images_woman[2] = {
      url:
        "https://i.pinimg.com/236x/11/46/a0/1146a06fb4fcbfa721647c9b40b3f20a.jpg",
      prix: "205$",
      description: "My ex is father ✨",
    };

    this.images_woman[3] = {
      url:
        "https://i.pinimg.com/236x/40/a3/be/40a3be3f4aa8d8c92e516cd31fce838c.jpg",
      prix: "180$",
      description: "Air Jordan 1 Mid Barely Orange 🍑",
    };

    this.images_woman[4] = {
      url:
        "https://i.pinimg.com/236x/47/d8/c6/47d8c64368bf126f49496652a1792605.jpg",
      prix: "195$",
      description: "Nike Air Max 270 White Black - AH8050-100",
    };

    this.images_woman[5] = {
      url:
        "https://i.pinimg.com/236x/4d/84/3e/4d843e28feb62aecff1c4b2190630129.jpg",
      prix: "230$",
      description: "Nike airss",
    };

    this.images_woman[6] = {
      url:
        "https://i.pinimg.com/236x/18/50/21/185021c6d17c60f50a129fd99db24938.jpg",
      prix: "230$",
      description: "Meu script para the vampire diaries",
    };

    this.images_woman[7] = {
      url:
        "https://i.pinimg.com/236x/72/8d/46/728d4688a7e1bbeef0fba580aa479324.jpg",
      prix: "300$",
      description: "It's new ! 💛",
    };

    this.images_woman[8] = {
      url:
        "https://i.pinimg.com/236x/49/dc/44/49dc44fb2ad5634931e8c566900dfdfd.jpg",
      prix: "185$",
      description: "POR CAUSA DAQUELA PORR@ DE VIAGEM [1]",
    };

    this.images_woman[9] = {
      url:
        "https://i.pinimg.com/564x/9b/2a/35/9b2a35bec9294663b2af6b2e340ee236.jpg",
      prix: "120$",
      description: "Baskets mode femme",
    };

    this.images_woman[10] = {
      url:
        "https://i.pinimg.com/236x/2d/a2/f0/2da2f0372db9eedb5d34083222cc533b.jpg",
      prix: "140$",
      description: "Image about fashion in Sneakers and Heels 💛 by Fille des îles",
    };

    this.images_woman[11] = {
      url:
        "https://i.pinimg.com/236x/c3/91/8d/c3918dc3270e0329ed4d921d05462f9f.jpg",
      prix: "230$",
      description: "Sneaker à lacets color block à imprimé lettre - Blanc / 37",
    };

    this.images_woman[12] = {
      url:
        "https://i.pinimg.com/236x/ad/cb/20/adcb20ca61e809dbb314eab61ab55301.jpg",
      prix: "200$",
      description: "Cet article n'est pas disponible | Etsy",
    };

    this.images_woman[13] = {
      url:
        "https://i.pinimg.com/236x/e0/bc/e6/e0bce653fd8c6ef6849601798ede34b7.jpg",
      prix: "190$",
      description: "Tan Shadow Custom Nike Air Force 1's (AF1s)",
    };

    this.images_woman[14] = {
      url:
        "https://i.pinimg.com/236x/8e/4c/04/8e4c04fc61bb848456c63a95213e5d2c.jpg",
      prix: "230$",
      description: "Air Force 1 Shadow Outline Red",
    };

    this.images_woman[15] = {
      url:
        "https://i.pinimg.com/236x/4b/a8/ec/4ba8ec0e2968b0020ba78d4a5d82f63e.jpg",
      prix: "100$",
      description: "Image in SHOES collection by 𝚉𝙾𝙴 on We Heart It",
    };

  }
  buy_article(i:any){
   this.info_shoes=this.images[i]
   this.info_shoes = this.images_woman[i];
   this.see_info_article=true;
   //console.log( this.info_shoes);
   
  }
  delet_info(){
    this.see_info_article=false;
  }

  move_left(){
    this. clcik =! this.clcik;
    this. view_woman_page =! this. view_woman_page;
    this.cache_man_page =! this.cache_man_page;
  }
  
 

}

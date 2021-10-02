import { ServicePhotoService } from "./../service-photo.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shoes",
  templateUrl: "./shoes.component.html",
  styleUrls: ["./shoes.component.scss"],
})
export class ShoesComponent implements OnInit {
  images: any[] = [];
  info_shoes:any;
  see_info_article:boolean = false;
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

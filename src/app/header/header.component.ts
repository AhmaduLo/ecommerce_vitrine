import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  check:boolean=false;
  check_menuBurger:boolean=false;
  menu_Cache:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

burger_click(){
  this.check =! this.check
  this.check_menuBurger =! this.check_menuBurger
  this.menu_Cache =! this.menu_Cache
}

remove_ul(){
  this.check =! this.check
  this.check_menuBurger =! this.check_menuBurger
  this.menu_Cache =! this.menu_Cache
}

remove_menu_burger(){
  this.check =! this.check
  this.check_menuBurger =! this.check_menuBurger
  this.menu_Cache =! this.menu_Cache
}

}

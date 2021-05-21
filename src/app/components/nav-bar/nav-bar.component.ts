import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faCartArrowDown, faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  displayMenu = true;
  displayMenuOpt = 'flex';
  faCartArrowDown = faCartArrowDown;
  faSignInAlt = faSignInAlt;
  faBars = faBars;

  showCart: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.showMenu();
  }

  showMenu(): void {
    var menu = document.getElementById('menuFiller'); 
    var menuFiller = document.getElementById('menu'); 
    this.displayMenu = !this.displayMenu;
    if (this.displayMenu) {
      menuFiller?.classList.toggle('hide-mobile');
      menu?.classList.toggle('hide-mobile');
    } else {
      menuFiller?.classList.add('hide-mobile');
      menu?.classList.add('hide-mobile');
    }

  }

  displayCart(): void {
    this.showCart = !this.showCart;
  }
}

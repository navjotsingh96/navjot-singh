import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public router: Router,
    @Inject(DOCUMENT) document: Document) { }

  ngOnInit(): void {
  }
  hide() {
    console.log('Clciked');
    let sidemenu = document.getElementById('sidebarMenu');
    sidemenu?.classList.toggle('open-menu')

  }
  toogelMenu() {
    console.log('Clicked');
    let sidemenu = document.getElementById('sidebarMenu');
    sidemenu?.classList.toggle('open-menu')
  }
  openSideBar() {


    console.log('Clicked');

  }
}

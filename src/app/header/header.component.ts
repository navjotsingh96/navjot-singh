import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public router : Router,
    @Inject(DOCUMENT) document: Document) { }

  ngOnInit(): void {
}
openSideBar(){

  
  console.log('Clicked');
  
}
}

import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var anime: any;    

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    setTimeout(() => {
      anime.timeline({loop: false})
    .add({
      targets: '.c2 .word',
      scale: [14,1],
      opacity: [0,1],
      easing: "easeOutCirc",
      duration: 700,
      delay: (el:any, i:any) => 200 * i
    }).add({
      targets: '.c2',
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
    }, 30);

   setTimeout(() => {
    anime({
      targets: '.c1 .el',
      direction: 'alternate',
      loop: true,
      scale: {
        value: '1.4',
        delay: function(el:any , i:any , l:any) {
          return i * 200;
        },
        duration: 1000
      }
   });
   }, 1500);

  
   };
  

  ngOnInit(): void {
  }

}

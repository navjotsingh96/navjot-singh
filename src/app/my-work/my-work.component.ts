import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:boolean=true;
  angular = false;
  java:boolean = false;

  pokedox = false;
  game = false;
  join = false;
  ringoffire= false;
 

  pokemon() {
    this.pokedox = true;
    console.log('hier')
  }
  pokemonNone() {
    this.pokedox = false;
  }
  elPollo() {
    this.game = true;
  }
  elPolloNone() {
    this.game = false;
  }
  joinapp(){
    this.join = true;
  }
  joinNone(){
    this.join = false;
  }
  ring(){
    this.ringoffire = true;
  }
  ringNone(){
    this.ringoffire = false;

  }
}

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

  all = true;
  angular = true;
  java = true;

  pokedox = false;
  game = false;
  join = false;
  ringoffire = false;
 
  allProlects() {
    this.all = true;
    this.java = true;
    this.angular = true;

  }
  angularProjects() {
    this.angular = true;
    this.all = false;
    this.java = false;

  }

  javaProjects() {
    this.java = true
    this.all = false;
    this.angular = false;
  }

  pokemon() {
    this.pokedox = true;

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
  joinapp() {
    this.join = true;
  }
  joinNone() {
    this.join = false;
  }
  ring() {
    this.ringoffire = true;
  }
  ringNone() {
    this.ringoffire = false;

  }
}

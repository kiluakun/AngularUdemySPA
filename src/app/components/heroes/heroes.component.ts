import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService,
               private _router:Router ) {
    // console.log('constructor');
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    // console.log('Init', this.heroes);
  }

  verHeroe(indice: number) {
    //console.log(indice);
    this._router.navigate( ['/heroe', indice] );
  }

}

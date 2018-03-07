import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/scheduler/Action';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroesArr:Heroe[] = [];
  termino:string = '';

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService,
               private _router:Router ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];

      this.heroesArr = this._heroesService.buscarHeroes(this.termino);
      console.log(this.heroesArr);
      //return heroesArr;

    });
  }

  verHeroe(indice: number) {
    //console.log(indice);
    this._router.navigate( ['/heroe', indice] );
  }

}

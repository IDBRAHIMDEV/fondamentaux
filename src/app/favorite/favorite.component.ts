import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  
  favoris: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  setFavoris() {
    this.favoris = !this.favoris;
  }

}

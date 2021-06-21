import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  imgUrl = 'http://lorempixel.com/output/food-q-g-640-480-1.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}

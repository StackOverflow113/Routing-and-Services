import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() user: any;
  imgUrl: string;
  firstname: string;
  email: string;
  id: number;
  constructor() { }

  ngOnInit(): void {
    this.firstname = this.user.name;
    this.email = this.user.email;
    this.id = this.user.id;
  }

}

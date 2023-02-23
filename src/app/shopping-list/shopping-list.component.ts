import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 120),
    new Ingredient('Organe', 70),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onNewAddition(event) {
    if (event) {
      this.ingredients.push(event);
    }
  }

}

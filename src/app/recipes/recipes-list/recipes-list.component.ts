import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is test recipe 1', 'https://www.seriouseats.com/thmb/t2cbi4d-LeZGu__DP5dF1gBuzsM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/oyakodon-japanese-chicken-and-egg-rice-bowl-recipe-hero-f2d42cfe8e8e4436b97d6e79d038d9bc.JPG'),
    new Recipe('A Test Recipe 2', 'This is test recipe 2', 'https://www.seriouseats.com/thmb/t2cbi4d-LeZGu__DP5dF1gBuzsM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/oyakodon-japanese-chicken-and-egg-rice-bowl-recipe-hero-f2d42cfe8e8e4436b97d6e79d038d9bc.JPG')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClick(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }

}

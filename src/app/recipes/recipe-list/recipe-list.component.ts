import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[]=[
    new Recipe("Rice Crisp", "Crisp","https://images.kglobalservices.com/www.ricekrispies.com/en_us/recipe/kicrecipe-1605/recip_img-7547527_the_original_rice_krispies_treats-005.jpg"),
    new Recipe("Tiramisu","Cake with many flavors","https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tiramisu_with_blueberries_and_raspberries%2C_July_2011.jpg/450px-Tiramisu_with_blueberries_and_raspberries%2C_July_2011.jpg")
  ]

  constructor() { }

  ngOnInit() {
  }

}

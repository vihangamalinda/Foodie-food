import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes:Recipe[] = [
    new Recipe('Test Recipe','Simple Test','https://vismaifood.com/storage/app/uploads/public/7b2/49e/d12/thumb__1200_0_0_0_auto.jpg'),
    new Recipe('Test Recipe','Simple Test','https://vismaifood.com/storage/app/uploads/public/7b2/49e/d12/thumb__1200_0_0_0_auto.jpg'),
    new Recipe('Test Recipe','Simple Test','https://vismaifood.com/storage/app/uploads/public/7b2/49e/d12/thumb__1200_0_0_0_auto.jpg'),
  ]
}

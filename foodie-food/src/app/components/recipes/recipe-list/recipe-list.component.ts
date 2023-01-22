import { Component ,Output,EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output("selectedRecipeItem") wasSelectedRecipe = new EventEmitter<Recipe>();

  recipes:Recipe[] = [
    new Recipe('Test Recipe 01','Simple Test','https://vismaifood.com/storage/app/uploads/public/7b2/49e/d12/thumb__1200_0_0_0_auto.jpg'),
    new Recipe('Test Recipe 02 ','Simple Test','https://vismaifood.com/storage/app/uploads/public/7b2/49e/d12/thumb__1200_0_0_0_auto.jpg'),
    new Recipe('Test Recipe 03','Simple Test','https://vismaifood.com/storage/app/uploads/public/7b2/49e/d12/thumb__1200_0_0_0_auto.jpg'),
  ];

  onSelectedItem(item:Recipe){
    this.wasSelectedRecipe.emit(item);
  }
  

}
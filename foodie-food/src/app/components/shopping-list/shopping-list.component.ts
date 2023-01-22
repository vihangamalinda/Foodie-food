import { Component } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {


  ingrediants:Ingrediant[]=[
    new Ingrediant('Apples',5),
    new Ingrediant('Orange',5),
  ];

  onIngrediantAdded(newIngrediant:Ingrediant){
    // console.log('Added Ingrediant',newIngrediant);
    this.ingrediants.push(newIngrediant);
  }
}

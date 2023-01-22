import { Component,ElementRef,ViewChild,Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipes/recipe.model';
import { Ingrediant } from '../../shared/ingrediant.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;

  @Output('ingrediantAdded') passFormVal = new EventEmitter<Ingrediant>();

  addToList(){
    const igName =this.nameInputRef.nativeElement.value;
    const igAmount= this.amountInputRef.nativeElement.value;
    const ingrediant = new Ingrediant(igName,igAmount);
    // console.log(ingrediant);
    this.passFormVal.emit(ingrediant);
  }

 
}

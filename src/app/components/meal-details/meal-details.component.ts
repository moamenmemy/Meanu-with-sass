import { Component, OnInit } from '@angular/core';
import { MealsService } from '../../services/service.service';
import { ActivatedRoute } from '@angular/router';
// import { console } from 'inspector';

@Component({
  selector: 'app-meal-details',
  imports: [],
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.css'
})
export class MealDetailsComponent implements OnInit {
  mealDetails:any;

constructor( 
  private _MealsService: MealsService,
  private _ActivatedRoute:ActivatedRoute) {}

ngOnInit():void{
 if(typeof document != 'undefined'){

  this._ActivatedRoute.paramMap.subscribe((params)=>{
    const mealId = params.get("mealId");
    if(mealId){
      this._MealsService.getMealDetails('52812').subscribe((res) => {
        this.mealDetails = res.meals[0];
        });
    }
  });

  }
}

getIngredients(mealDetails:any): any{
  const ingredients = [];
  for(let i = 1 ; i <=20; i++){
    const ingredient = `strIngredient${i}`;
    const measure = `strMeasure${i}`;

    if(mealDetails[ingredient]) {
      ingredients.push({
        Ingredient: mealDetails[ingredient],
         measure:mealDetails[measure],
      });
    
    }else{
      return ingredients
    }
  }
}
}

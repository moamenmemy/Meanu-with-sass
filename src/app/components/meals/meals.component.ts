import { Component, OnInit } from '@angular/core';
import { MealsService } from '../../services/service.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-meals',
  imports: [RouterLink],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css'
})
export class MealsComponent implements OnInit {
  categories: any;
// c: any;
meals:any;

constructor(
  private _MealsService: MealsService,
   private _ActivatedRoute:ActivatedRoute
  ) {}

ngOnInit():void{
  if(typeof document != 'undefined'){
    this._MealsService.getAllCategories().subscribe((res)=>{
  this.categories = res.meals;
  console.log(res.meals);
  });



  this._ActivatedRoute.paramMap.subscribe((params) => {
    const categoryName = params.get('categoryName');
    
      if(categoryName){ 
    this._MealsService
    .getMealsByCategory(categoryName)
    .subscribe((res) => {
      this.meals = res.meals;
        });
      }
  });


  }
 }
}

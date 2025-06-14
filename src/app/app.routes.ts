import { Routes } from '@angular/router';
import { MealLayoutComponent } from './components/meal-layout/meal-layout.component';
import { MealsComponent } from './components/meals/meals.component';
import { MealDetailsComponent } from './components/meal-details/meal-details.component';

export const routes: Routes = [
    {path:'',
        component:MealLayoutComponent,
         children:[
            {path:'',redirectTo:'category/all', pathMatch:'full'},
            {
        path:'category/:categoryName',
        component:MealsComponent,
    },
    {
        path:'mealdetails/:mealId',
        component:MealDetailsComponent,
    },
    ],
    },
    ];

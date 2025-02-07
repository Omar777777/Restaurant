import { Component, inject } from '@angular/core';
import { MealsService } from '../../../services/meals.service';

@Component({
  selector: 'app-dessert',
  imports: [],
  templateUrl: './dessert.component.html',
  styleUrl: './dessert.component.css'
})
export class DessertComponent {

  
       httpClient = inject(MealsService);
        allMeals: any = [];
      
        getAllMeals() {
          this.httpClient.getMealsCategories('Dessert').subscribe({
            next: (res) => {
              this.allMeals = res.meals; 
            }
          })
        }
      
        ngOnInit():void {
          this.getAllMeals();
        }

}

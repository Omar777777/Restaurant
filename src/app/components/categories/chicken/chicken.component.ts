import { Component, inject } from '@angular/core';
import { MealsService } from '../../../services/meals.service';

@Component({
  selector: 'app-chicken',
  imports: [],
  templateUrl: './chicken.component.html',
  styleUrl: './chicken.component.css'
})
export class ChickenComponent {

  
     httpClient = inject(MealsService);
      allMeals: any = [];
    
      getAllMeals() {
        this.httpClient.getMealsCategories('Chicken').subscribe({
          next: (res) => {
            this.allMeals = res.meals; 
          }
        })
      }
    
      ngOnInit():void {
        this.getAllMeals();
      }

}

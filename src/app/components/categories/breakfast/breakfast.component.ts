import { Component, inject } from '@angular/core';
import { MealsService } from '../../../services/meals.service';

@Component({
  selector: 'app-breakfast',
  imports: [],
  templateUrl: './breakfast.component.html',
  styleUrl: './breakfast.component.css'
})
export class BreakfastComponent {

   httpClient = inject(MealsService);
    allMeals: any = [];
  
    getAllMeals() {
      this.httpClient.getMealsCategories('Breakfast').subscribe({
        next: (res) => {
          this.allMeals = res.meals; 
        }
      })
    }
  
    ngOnInit():void {
      this.getAllMeals();
    }

}

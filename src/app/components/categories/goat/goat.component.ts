import { Component, inject } from '@angular/core';
import { MealsService } from '../../../services/meals.service';

@Component({
  selector: 'app-goat',
  imports: [],
  templateUrl: './goat.component.html',
  styleUrl: './goat.component.css'
})
export class GoatComponent {

  
         httpClient = inject(MealsService);
          allMeals: any = [];
        
          getAllMeals() {
            this.httpClient.getMealsCategories('Goat').subscribe({
              next: (res) => {
                this.allMeals = res.meals; 
              }
            })
          }
        
          ngOnInit():void {
            this.getAllMeals();
          }

}

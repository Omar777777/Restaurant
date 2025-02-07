import { Component, inject } from '@angular/core';
import { MealsService } from '../../../services/meals.service';

@Component({
  selector: 'app-lamb',
  imports: [],
  templateUrl: './lamb.component.html',
  styleUrl: './lamb.component.css'
})
export class LambComponent {

   httpClient = inject(MealsService);
            allMeals: any = [];
          
            getAllMeals() {
              this.httpClient.getMealsCategories('Lamb').subscribe({
                next: (res) => {
                  this.allMeals = res.meals; 
                }
              })
            }
          
            ngOnInit():void {
              this.getAllMeals();
            }

}

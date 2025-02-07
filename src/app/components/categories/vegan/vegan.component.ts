import { Component, inject } from '@angular/core';
import { MealsService } from '../../../services/meals.service';

@Component({
  selector: 'app-vegan',
  imports: [],
  templateUrl: './vegan.component.html',
  styleUrl: './vegan.component.css'
})
export class VeganComponent {

    httpClient = inject(MealsService);
                          allMeals: any = [];
                        
                          getAllMeals() {
                            this.httpClient.getMealsCategories('Vegan').subscribe({
                              next: (res) => {
                                this.allMeals = res.meals; 
                              }
                            })
                          }
                        
                          ngOnInit():void {
                            this.getAllMeals();
                          }
  

}

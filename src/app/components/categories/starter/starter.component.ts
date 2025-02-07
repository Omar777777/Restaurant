import { Component, inject } from '@angular/core';
import { MealsService } from '../../../services/meals.service';

@Component({
  selector: 'app-starter',
  imports: [],
  templateUrl: './starter.component.html',
  styleUrl: './starter.component.css'
})
export class StarterComponent {

   httpClient = inject(MealsService);
                        allMeals: any = [];
                      
                        getAllMeals() {
                          this.httpClient.getMealsCategories('Starter').subscribe({
                            next: (res) => {
                              this.allMeals = res.meals; 
                            }
                          })
                        }
                      
                        ngOnInit():void {
                          this.getAllMeals();
                        }

}

import { Component, inject } from '@angular/core';
import { MealsService } from '../../../services/meals.service';

@Component({
  selector: 'app-vegetarian',
  imports: [],
  templateUrl: './vegetarian.component.html',
  styleUrl: './vegetarian.component.css'
})
export class VegetarianComponent {

      httpClient = inject(MealsService);
                            allMeals: any = [];
                          
                            getAllMeals() {
                              this.httpClient.getMealsCategories('Vegetarian').subscribe({
                                next: (res) => {
                                  this.allMeals = res.meals; 
                                }
                              })
                            }
                          
                            ngOnInit():void {
                              this.getAllMeals();
                            }

}

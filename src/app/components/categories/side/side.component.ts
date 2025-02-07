import { Component, inject } from '@angular/core';
import { MealsService } from '../../../services/meals.service';

@Component({
  selector: 'app-side',
  imports: [],
  templateUrl: './side.component.html',
  styleUrl: './side.component.css'
})
export class SideComponent {

    httpClient = inject(MealsService);
                      allMeals: any = [];
                    
                      getAllMeals() {
                        this.httpClient.getMealsCategories('Side').subscribe({
                          next: (res) => {
                            this.allMeals = res.meals; 
                          }
                        })
                      }
                    
                      ngOnInit():void {
                        this.getAllMeals();
                      }

}

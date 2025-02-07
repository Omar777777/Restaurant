import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categories',
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

    constructor(private router: Router) {}

  onCategoryChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    const route = selectedValue === 'All' ? ['/'] : ['/category', selectedValue];
    this.router.navigate(route);
  }

}

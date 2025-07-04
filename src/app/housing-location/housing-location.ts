import { Component, input } from '@angular/core';
import { HousingLocationInfo } from '../housinglocation';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterModule, RouterOutlet],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation().photo"
        alt="Exterior photo of {{ housingLocation().name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation().name }}</h2>
      <p class="listing-location">{{ housingLocation().city }}, {{ housingLocation().state }}</p>
      <a [routerLink]="['/details', housingLocation().id]">Learn more</a>
    </section>
  `,
  styleUrls: ['./housingLocation.css'],
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}

import { Component, Input, Output } from '@angular/core';
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "../../pages/home/home.component";

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, HomeComponent],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  image = 'assets/images/img/ironman.jpg';

}

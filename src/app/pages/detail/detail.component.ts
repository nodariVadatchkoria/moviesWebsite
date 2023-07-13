import {AfterViewInit, Component, ElementRef, HostListener, Inject, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [

  ],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements AfterViewInit{

  @ViewChild('imageContainer') imageContainer!: ElementRef;
    constructor(
      public dialogRef: MatDialogRef<DetailComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngAfterViewInit(): void {
        this.handleScroll();
    }

  @HostListener('window:scroll', ['$event'])

  handleScroll() {
    const imageContainer = this.imageContainer.nativeElement;
    const image = imageContainer.querySelector('#image');

      const rotationAngle = 360;
      const translateY = 200;
      if (image){
        image.style.transform = `translate(-50%, ${translateY}px) rotate(${rotationAngle}deg)`;
      }



  }

}

import {Component, OnInit,} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {DetailComponent} from "../../pages/detail/detail.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink,MatDialogModule, DetailComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{

  constructor(
    private dialog: MatDialog,

  ) { }
  openDialog(enterAnimationDuration:string, exitAnimationDuration: string) {
    this.dialog.open(DetailComponent,
      {
        width: '800px',
        height: '800px',
        enterAnimationDuration,
        exitAnimationDuration

      });

  }
  isOpen = false;

  toggleOpenClose() {
    this.isOpen = !this.isOpen;
  }
  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isOpen = true;
      const divElement = document.getElementById('opa'); // Replace 'yourDivId' with the actual ID of your <div> element
      if (divElement) {
        divElement.style.opacity = '1';
      }

    }, 500); // 500ms delay
  }
}

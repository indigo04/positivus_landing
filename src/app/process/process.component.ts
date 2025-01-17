import { Component } from '@angular/core';

@Component({
  selector: 'app-process',
  imports: [],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent {
  isActive: number | null = null;

  toggleDropdown(number: number) {
    if (this.isActive !== number) {
      this.isActive = number
    } else {
      this.isActive = null
    }
  }

  toggleClass(number: number) {
    return this.isActive === number
  }
}

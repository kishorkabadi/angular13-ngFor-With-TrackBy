import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  Numbers: string[] = ['One', 'Two', 'Three'];

  getMoreNumbers() {
    this.Numbers = ['One', 'Two', 'Three', 'Four'];
  }
  tracMoreNumbers(index: Number, nos: any) {
    return nos;
  }
}

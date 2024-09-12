import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './my-calculator.component.html',
  styleUrl: './my-calculator.component.scss'
})
export class MyCalculatorComponent {

x: number = 0
y: number = 0

result: number = 0


Add(x: number, y: number) :number{
  return this.result = x + y;
}

ShowAdd() {
  this.result = this.Add(this.x, this.y);
  console.log(this.result)
}

}

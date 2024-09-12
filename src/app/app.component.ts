import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MyCalculatorComponent } from "./my-calculator/my-calculator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, MyCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TitleFromComponent';


  enteredValue = ''



  tooltip = 'prompt'

  showMessage(message: string) {
    this.title = message;
  }
}

import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})

export class Calculator {
  // Properties
  num1: number = 0;
  num2: number = 0;
  result: string = '0';
  selectedOperator: string = '';

  // Methods
  add(): void {
    this.selectedOperator = '+';
    this.result = (this.num1 + this.num2).toFixed(2);
  }

  subtract(): void {
    this.selectedOperator = '-';
    this.result = (this.num1 - this.num2).toFixed(2);
  }

  multiplication(): void {
    this.selectedOperator = '*';
    this.result = (this.num1 * this.num2).toFixed(2);
  }

  division(): void {
    this.selectedOperator = '/';
    if (this.num2 === 0) {
      this.result = "Error: Can't divide with 0";
    } else {
      this.result = (this.num1 / this.num2).toFixed(2);
    }
  }

  reset(): void {
    this.num1 = 0;
    this.num2 = 0;
    this.result = '0';
    this.selectedOperator = '';
  }
}

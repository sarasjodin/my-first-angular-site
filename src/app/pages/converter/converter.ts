import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-converter',
  imports: [],
  templateUrl: './converter.html',
  styleUrl: './converter.css',
})
export class Converter {
  // Properties
  inputValueMeter: number = 0;
  inputValueFeet: number = 0;
  inputValueCelsius: number = 0;
  inputValueFahrenheit: number = 0;
  resultMeter: string = '0';
  resultFeet: string = '0';
  resultFahrenheit: string = '0';
  resultCelsius: string = '0';

  // Methods
  convertMeterToFeet(): void {
    const feet = this.inputValueMeter * 3.28084;
    this.resultFeet = `${this.inputValueMeter} meter = ${feet.toFixed(2)} feet`;
  }

  convertFeetToMeter(): void {
    const meter = this.inputValueFeet * 0.3048;
    this.resultMeter = `${this.inputValueFeet} feet = ${meter.toFixed(
      2
    )} meter`;
  }

  convertCelsiusToFahrenheit(): void {
    const fahrenheit = this.inputValueCelsius * 1.8 + 32;
    this.resultFahrenheit = `${
      this.inputValueCelsius
    } °C = ${fahrenheit.toFixed(2)} °F`;
  }

  convertFahrenheitToCelsius(): void {
    const celsius = (this.inputValueFahrenheit - 32) / 1.8;
    this.resultCelsius = `${this.inputValueFahrenheit} °F = ${celsius.toFixed(
      2
    )} °C`;
  }
}

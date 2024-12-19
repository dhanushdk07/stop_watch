import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomPipe } from "./custom.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [DecimalPipe],
  imports: [CustomPipe],
})
export class AppComponent {
  title = 'product-app';
  
  private intervalId: any = null;
  private secondsElapsed: number = 0;

  get hours(): number {
    return Math.floor(this.secondsElapsed / 3600);
  }

  get minutes(): number {
    return Math.floor((this.secondsElapsed % 3600) / 60);
  }

  get seconds(): number {
    return this.secondsElapsed % 60;
  }

  startWatch(): void {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.secondsElapsed++;
      }, 1000);
    }
  }

  stopWatch(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  resetWatch(): void {
    this.stopWatch();
    this.secondsElapsed = 0;
  }
}
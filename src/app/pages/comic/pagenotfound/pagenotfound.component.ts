import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  standalone: true,
  imports: [],
  templateUrl: './pagenotfound.component.html',
  styleUrl: './pagenotfound.component.scss',
})
export class PagenotfoundComponent {
  constructor(private router: Router) {}

  /**
   * Redirect to main page
   */

  mainPage() {
    this.router.navigate(['/']);
  }

}

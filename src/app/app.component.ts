import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Sample';
  constructor(private router: Router) { }

  gotoList() {
    this.router.navigate(['/User']);
  }
  
}

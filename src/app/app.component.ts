import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './shared/pages/layout/layout.component';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    
   
    RouterOutlet, 
    LayoutComponent, 
    
    CommonModule,
    RouterModule,
    
  ],
})
export class AppComponent {
  title = 'FRONTENDTSPM2';
}

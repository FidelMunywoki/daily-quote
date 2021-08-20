import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Daily Qoute | Stay Motivated';

  qoutes:Quote[] = [
    {id:1, authorName:'Amerix',qouteDescription: 'xxxxx'},
    {id:2,authorName:'Nelson Mandela',qouteDescription: 'xxxxx'},
    {id:3,authorName:'Lucky Dube', qouteDescription: 'xxxxx'},
    {id:4,authorName:'Fidel Munywoki',qouteDescription: 'xxxxx'},
    {id:5,authorName:'Michael Jordan', qouteDescription: 'xxxxx'},
    {id:6,authorName: 'Michael B Jordan', qouteDescription: 'xxxxx'},
  ];
}

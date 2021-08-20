import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, authorName:'Amerix',quoteDescription: '"A winner is a dreamer who never gives up." "Education is the most powerful weapon which you can use to change the world."'},
    {id:2,authorName:'Nelson Mandela',quoteDescription: '"A winner is a dreamer who never gives up." "Education is the most powerful weapon which you can use to change the world."'},
    {id:3,authorName:'Lucky Dube', quoteDescription: '"A winner is a dreamer who never gives up." "Education is the most powerful weapon which you can use to change the world."'},
    {id:4,authorName:'Fidel Munywoki',quoteDescription: '"A winner is a dreamer who never gives up." "Education is the most powerful weapon which you can use to change the world."'},
    {id:5,authorName:'Michael Jordan', quoteDescription: '"A winner is a dreamer who never gives up." "Education is the most powerful weapon which you can use to change the world."'},
    {id:6,authorName: 'Michael B Jordan', quoteDescription: '"A winner is a dreamer who never gives up." "Education is the most powerful weapon which you can use to change the world."'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

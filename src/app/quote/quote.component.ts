import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote (1, "A winner is a dreamer who never gives up. Education is the most powerful weapon which you can use to change the world.", "Nelson Mandela"),
    new Quote (2, "A winner is a dreamer who never gives up. Education is the most powerful weapon which you can use to change the world.", "Nelson Mandela"),
    new Quote (3, "A winner is a dreamer who never gives up. Education is the most powerful weapon which you can use to change the world.", "Nelson Mandela"),
    
  ];

  toggleDetails(index: number) {
    this.quotes[index].showAuthorName = !this.quotes[index].showAuthorName;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

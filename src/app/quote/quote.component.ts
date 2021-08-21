import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote (1, "A winner is a dreamer who never gives up. Education is the most powerful weapon which you can use to change the world.", "Nelson Mandela","F Munywoki", new Date(2019,9,1)),
    new Quote (2, "A winner is a dreamer who never gives up. Education is the most powerful weapon which you can use to change the world.", "Nelson Mandela", "Martin Younger", new Date(2020,11,23)),
    new Quote (3, "A winner is a dreamer who never gives up. Education is the most powerful weapon which you can use to change the world.", "Nelson Mandela", "Trevor Spencer", new Date(2021,2,20)),
    
  ];

  toggleDetails(index: number) {
    this.quotes[index].showAuthorName = !this.quotes[index].showAuthorName;
  }

  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.postedDate = new Date(quote.postedDate)
    this.quotes.push(quote)
  }

  deleteQuote(isComplete: boolean, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this Quote by ${this.quotes[index].authorName}?`)
      if (toDelete) {
        this.quotes.splice(index,1);
      }
    }
  }

  addUpVotes(i: number) {
    this.quotes[i].upVotes+=1;
  }

  addDownVotes(i: number) {
    this.quotes[i].downVotes+=1;
  }



  constructor() { }

  ngOnInit(): void {
  }

}

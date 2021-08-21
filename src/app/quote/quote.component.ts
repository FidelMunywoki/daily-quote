import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote (1, "A winner is a dreamer who never gives up. Education is the most powerful weapon which you can use to change the world.", "Nelson Mandela","Amapiano Zulu", new Date(2019,9,1)),
    new Quote (2, "I don't need motivation, what keeps me in front of my computer for over 18hrs a day is DISCIPLINE", "Fidel Munywoki", "Martin Younger", new Date(2020,11,23)),
    new Quote (3, "We don't ask you to believe in our ability to bring change, rather, we ask you to believe in yours.", "Barrack Obama", "Trevor Spencer", new Date(2021,2,20)),
    
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

  formatDays(numberOfDays: number) {
    var years = Math.floor(numberOfDays/365);
    var months = Math.floor(numberOfDays %365 /30);
    var days = Math.floor(numberOfDays % 365 % 30);

    var displayYears = years > 0 ? years + (years == 1 ? "year, ": "years, ") : "";
    var displayMonths = months > 0 ? months + (months == 1 ? " month, " : " months, ") : "";
    var displayDays = days > 0 ? days + (days == 1 ? " day" : " days") : "";
    return displayYears + displayMonths + displayDays;
  
}



  constructor() { }

  ngOnInit(): void {
  }

}

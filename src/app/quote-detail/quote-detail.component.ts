import { Quote } from '../quote';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input()
  quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean) {
    this.isComplete.emit(complete);
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}

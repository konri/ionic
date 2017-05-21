import {Component, OnInit} from '@angular/core';
import {Quote} from "../../data/quote.interface";

import quotes from '../../data/quotes';
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{
  private quotesCollection: {category: string, quotes: Quote[], icon: string}[];

  constructor() {
    console.log("dasdas");
  }
  ngOnInit() {
    this.quotesCollection = quotes;
    console.log(this.quotesCollection);
  }

}

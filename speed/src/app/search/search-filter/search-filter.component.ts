import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  public criteria: string = 'agency';

  @Output() public search = new EventEmitter();
 
  constructor() { }

  ngOnInit() {
  }

}

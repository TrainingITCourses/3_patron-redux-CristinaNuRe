import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-criteria-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './criteria-list.component.html',
  styleUrls: ['./criteria-list.component.css']
})
export class CriteriaListComponent implements OnInit {

  @Input() public filteredCriteria;
  @Output() public searchLaunches = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Launch } from 'src/app/store/models/launch';

@Component({
  selector: 'app-launches-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.css']
})
export class LaunchesListComponent implements OnInit {

@Input() public filteredLaunches: Launch[];

  constructor() { }

  ngOnInit() {
  }

}

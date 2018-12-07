import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-launches-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './launches-counter.component.html',
  styleUrls: ['./launches-counter.component.css']
})
export class LaunchesCounterComponent implements OnInit {

  @Input() public count: number;

  constructor() { }

  ngOnInit() {
  }

}

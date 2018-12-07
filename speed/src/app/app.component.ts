import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiService } from './store/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'speed';

}

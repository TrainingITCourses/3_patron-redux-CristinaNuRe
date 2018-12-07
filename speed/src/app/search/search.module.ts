import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { SearchContainerComponent } from './search-container/search-container.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { CriteriaListComponent } from './criteria-list/criteria-list.component';
import { LaunchesListComponent } from './launches-list/launches-list.component';
import { LaunchesCounterComponent } from './launches-counter/launches-counter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SearchContainerComponent, SearchFilterComponent, CriteriaListComponent, LaunchesListComponent, LaunchesCounterComponent]
})
export class SearchModule { }

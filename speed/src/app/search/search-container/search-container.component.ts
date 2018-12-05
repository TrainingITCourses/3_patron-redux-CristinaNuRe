import { Component, OnInit } from '@angular/core';
import { Criteria } from 'src/app/store/models/criteria';
import { Launch } from 'src/app/store/models/launch';
import { ApiService } from 'src/app/store/services/api.service';
import { GlobalStoreService } from 'src/app/store/services/global-store.service';
import { GlobalActionTypes, LoadCriteriaResults, LoadLaunches } from "src/app/store/global-store.actions";

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {

  public filteredCriteria: {criteria: Criteria, filteredResults: any[]} = 
    {criteria: Criteria.agency, filteredResults: []};
  public filteredLaunches: Launch[];
  public launchesCount: number = 0;

  constructor(private api: ApiService, private store: GlobalStoreService) { }

  ngOnInit() {
    // TODO this.store.select$().subscribe(// TODO);
  }

private clearCriteriaValues() {
  this.filteredCriteria = {
    criteria: this.filteredCriteria.criteria,
    filteredResults: []
  }
}

  private clearLaunches() {
    this.filteredLaunches = [];
    this.launchesCount = 0;
  }  

  public onSearch(searchParams: {criteria: string, text: string}) {
    
    if (searchParams.text.length > 0) {

      // TODO
      //this.store.dispatch(new LoadCriteriaResults(searchParams));

      const searchText: string = searchParams.text.toLowerCase();
      const searchCriteria: string = searchParams.criteria.toLowerCase();

      this.clearLaunches();

      switch(searchCriteria) {
        case 'agency': { 
          this.api.getAgencies().subscribe(agencies => {
            this.filteredCriteria = {
              criteria: Criteria.agency,
              filteredResults: this.getFilteredResultsByName(agencies, searchText)
            }
          });
          break; 
        } 
        case 'status': { 
          this.api.getLaunchStatus().subscribe(launchStatus => {
            this.filteredCriteria = {
              criteria: Criteria.launchStatus,
              filteredResults: this.getFilteredResultsByName(launchStatus, searchText)
            }
          });
          break; 
        } 
        case 'type': { 
          this.api.getMissionTypes().subscribe(missionTypes => {
            this.filteredCriteria = {
              criteria: Criteria.missionType,
              filteredResults: this.getFilteredResultsByName(missionTypes, searchText)
            }
          });
          break; 
        }
      }

    } else {
      this.clearCriteriaValues();
    }
  }

  public onSearchLaunches(searchParams: {criteria: Criteria, filterId: number}) {

      // TODO
      // this.store.dispatch(new LoadLaunches(searchParams));
    
    this.api.getLaunches().subscribe(launches => {
      this.filteredLaunches = launches.filter((launch: Launch) => {

        switch(searchParams.criteria) {

          case Criteria.agency: {
            return (launch.lsp && launch.lsp.id === searchParams.filterId);
          }
          case Criteria.launchStatus: {
            return launch.status === searchParams.filterId;
          }
          case Criteria.missionType: {
            return launch.missions
            .filter(mission => mission.type === searchParams.filterId)
            .length > 0;
          }
        }

      });
      this.launchesCount = this.filteredLaunches.length;
    });
  }

  private getFilteredResultsByName(results: any[], name: string): any[] {
    return results.filter(result =>
      result.name.toLowerCase().includes(name));
  }
}

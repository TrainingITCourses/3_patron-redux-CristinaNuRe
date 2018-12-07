import { Component, OnInit } from '@angular/core';
import { CriteriaTypes } from 'src/app/store/models/criteriaTypes';
import { Criteria } from 'src/app/store/models/criteria';
import { Launch } from 'src/app/store/models/launch';
import { ApiService } from 'src/app/store/services/api.service';
import { GlobalStoreService, GlobalSlideTypes } from 'src/app/store/services/global-store.service';
import { GlobalActionTypes, 
    LoadAgencies, 
    LoadMissionTypes, 
    LoadLaunchStatus, 
    LoadLaunches 
  } from "src/app/store/global-store.actions";
import { Agency } from 'src/app/store/models/agency';
import { Status } from 'src/app/store/models/status';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {

  public agencies: Agency[];
  public launchStatus: Status[];
  public missionTypes: any[];
  public launches: Launch[];
  public filteredCriteria: Criteria; // = new Criteria(CriteriaTypes.agency, []);
  public filteredLaunches: Launch[];  
  public launchesCount: number = 0;

  constructor(private api: ApiService, private globalStore: GlobalStoreService) { }

  ngOnInit() {
    this.globalStore.select$(GlobalSlideTypes.agencies)
      .subscribe(agencies => this.agencies = agencies);

    this.globalStore.select$(GlobalSlideTypes.launchStatus)
      .subscribe(launchStatus => this.launchStatus = launchStatus);
    
    this.globalStore.select$(GlobalSlideTypes.missionTypes)
      .subscribe(missionTypes => this.missionTypes = missionTypes);
  }

  private clearFilteredCriteriaValues() {
    this.filteredCriteria.results = [];
  }

  private clearFilteredLaunches() {
    this.filteredLaunches = [];
    this.launchesCount = 0;
  }  

  public onSearch(searchParams: {criteria: string, text: string}) {
    
    if (searchParams.text.length > 0) {

      // TODO
      //this.store.dispatch();

      const searchText: string = searchParams.text.toLowerCase();
      const searchCriteria: string = searchParams.criteria.toLowerCase();

      this.clearFilteredLaunches();

      switch(searchCriteria) { 
        case 'agency': 
          this.filteredCriteria = new Criteria(
            CriteriaTypes.agency, 
            this.getFilteredResultsByName(this.agencies, searchText));
          break;
        case 'status':
          this.filteredCriteria = new Criteria(
            CriteriaTypes.launchStatus, 
            this.getFilteredResultsByName(this.launchStatus, searchText));
          break;
        case 'type':
          this.filteredCriteria = new Criteria(
            CriteriaTypes.missionType, 
            this.getFilteredResultsByName(this.missionTypes, searchText));
          break;
      }

    } else {
      this.clearFilteredCriteriaValues();
    }
  }

  public onSearchLaunches(searchParams: {criteria: CriteriaTypes, filterId: number}) {

      // TODO
      // this.store.dispatch();

    this.filteredLaunches = this.launches.filter((launch: Launch) => {
      switch(searchParams.criteria) {

        case CriteriaTypes.agency:
          return (launch.lsp && launch.lsp.id === searchParams.filterId);

        case CriteriaTypes.launchStatus:
          return launch.status === searchParams.filterId;

        case CriteriaTypes.missionType:
          return launch.missions
          .filter(mission => mission.type === searchParams.filterId)
          .length > 0;
      }

    });

    this.launchesCount = this.filteredLaunches.length;
  }

  private getFilteredResultsByName(results: any[], name: string): any[] {
    return results.filter(result =>
      result.name.toLowerCase().includes(name));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Agency } from '../models/agency';
import { Launch } from '../models/launch';
import { Status } from '../models/status';
import { GlobalStoreService } from './global-store.service';
import { LoadAgencies, LoadLaunchStatus, LoadMissionTypes, LoadLaunches } from '../global-store.actions';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private agenciesEndPoint: string = '/assets/data/agencies.json';
  private launchStatusEndPoint: string = '/assets/data/launchstatus.json';
  private missionTypesEndPoint: string = '/assets/data/missiontypes.json';
  private launchesEndPoint: string = '/assets/data/launches.json';

  constructor(private http: HttpClient, private globalStore: GlobalStoreService) { }

  public getAgencies = () => {
    this.http.get(environment.apiUrl + this.agenciesEndPoint)
      .pipe(map((result: any) => result.agencies))
      .subscribe(agencies => {
        this.globalStore.dispatch(new LoadAgencies(agencies))
      });
  }

  public getLaunchStatus = () => {
    this.http.get(environment.apiUrl + this.launchStatusEndPoint)
      .pipe(map((result: any) => result.types))
      .subscribe(launchStatus => {
        this.globalStore.dispatch(new LoadLaunchStatus(launchStatus))
      });
  }

  public getMissionTypes = () => {
    this.http.get(environment.apiUrl + this.missionTypesEndPoint)
      .pipe(map((result: any) => result.types))
      .subscribe(missionTypes => {
        this.globalStore.dispatch(new LoadMissionTypes(missionTypes));
      });
  }

  public getLaunches = () => {
    this.http.get(environment.apiUrl + this.launchesEndPoint)
      .pipe(map((result: any) => result.launches))
      .subscribe(launches => {
        this.globalStore.dispatch(new LoadLaunches(launches));
      });
  }
}

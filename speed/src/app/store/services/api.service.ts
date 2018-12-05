import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Agency } from '../models/agency';
import { Launch } from '../models/launch';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getAgencies(): Observable<Agency[]> {
    return this.http.get(environment.apiUrl + '/assets/data/agencies.json')
     .pipe(map((res: any) => res.agencies));
  }

  public getLaunches(): Observable<Launch[]> {
    return this.http.get(environment.apiUrl + '/assets/data/launches.json')
    .pipe(map((res: any) => res.launches));
  }

  public getLaunchStatus(): Observable<Status[]> {
    return this.http.get(environment.apiUrl + '/assets/data/launchstatus.json')
    .pipe(map((res: any) => res.types));
  }

  public getMissionTypes(): Observable<Status[]> {
    return this.http.get(environment.apiUrl + '/assets/data/missiontypes.json')
    .pipe(map((res: any) => res.types));
  }
}

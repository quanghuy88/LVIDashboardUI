import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { environment } from '../../environments/environment';
import { RequestBaseService } from './request-base.service';

//const API_URL = environment.BASE_URL + '/api/v1/Common';
const API_URL = environment.BASE_URL + '/Common';

@Injectable({
    providedIn: 'root'
})
export class CommonService extends RequestBaseService {

    constructor(authenticationService: AuthenticationService, http: HttpClient) {
        super(authenticationService, http);
    }

    getPremiumRevenue(type: number): Observable<any> {
        return this.http.get<any>(API_URL + `/GetPremiumRevenue/${type}`, { headers: this.getHeaders });
    }

    getGeneralResult(): Observable<any> {
        return this.http.get<any>(API_URL + "/GetGeneralResult", { headers: this.getHeaders });
    }

    getBranches(): Observable<any> {
        return this.http.get<any>(API_URL + "/GetBranches", { headers: this.getHeaders });
    }

    getPremiumBranch(branchIds: string, accountMonths: string): Observable<any> {
        return this.http.post(API_URL + "/GetPremiumBranch", { branchIds: branchIds, accountMonths: accountMonths }, { headers: this.getHeaders });
    }

    getPremiumRevenueList(types: string): Observable<any> {
        return this.http.post(API_URL + "/GetPremiumRevenue", { types: types }, { headers: this.getHeaders });
    }

    getPremiumBranchDaily(branchIds: string, accountMonths: string): Observable<any> {
        return this.http.post(API_URL + "/GetPremiumBranchDaily", { branchIds: branchIds, accountMonths: accountMonths }, { headers: this.getHeaders });
    }

    getClaimBranch(branchIds: string, types: string): Observable<any> {
        return this.http.post(API_URL + "/GetClaimBranch", { branchIds: branchIds, types: types }, { headers: this.getHeaders });
    }
}

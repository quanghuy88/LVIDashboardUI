import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';
import { GridDataResult } from '@progress/kendo-angular-grid';

@Injectable({
    providedIn: 'root'
})
export class RequestBaseService extends BehaviorSubject<GridDataResult> {

    protected currentUser: User = new User;

    protected constructor(protected authenticationService: AuthenticationService, protected http: HttpClient) {
        super({ data: [], total: 0 });
        this.authenticationService.currentUser.subscribe(data => {
            this.currentUser = data;
            //console.log("Base Request: ", this.currentUser);
        });
    }

    get getHeaders(): HttpHeaders {
        return new HttpHeaders(
            {
                authorization: 'Bearer ' + this.currentUser?.token,
                branch: this.currentUser?.branchId!,
                role: this.currentUser?.role,
                "Content-Type": "application/json; charset=UTF-8"
            }
        );
    }
}

import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthGuard } from './guard/auth.guard';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { NotfoundComponent } from './pages/system/notfound/notfound.component';
import { UnauthorizedComponent } from './pages/system/unauthorized/unauthorized.component';
import { DashboardBranchComponent } from './pages/dashboard-branch/dashboard-branch.component';
import { DashboardClassGroupComponent } from './pages/dashboard-class-group/dashboard-class-group.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: '',
        component: LoginLayoutComponent,
        children: [
            // { path: 'login', component: LoginComponent }
        ]
    },
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                // canActivate: [AuthGuard],
                // data: {roles: [Role.ADMIN, Role.HO, Role.MANAGER]}
            },
            {
                path: 'classgroup/:id',
                component: DashboardClassGroupComponent
                //   canActivate: [AuthGuard],
                //   data: { roles: [Role.ADMIN, Role.HO, Role.MANAGER] }
            },
            {
                path: 'branch/:id',
                component: DashboardBranchComponent
                //   canActivate: [AuthGuard],
                //   data: { roles: [Role.ADMIN, Role.HO, Role.MANAGER] }
            },

        ]
    },

    {
        path: '',
        component: BlankLayoutComponent,
        children: [
            { path: '404', component: NotfoundComponent },
            { path: '401', component: UnauthorizedComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    constructor(private router: Router) {
        this.router.errorHandler = (error: any) => {
            this.router.navigate(['/404']);
        };
    }
}

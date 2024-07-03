import { NgModule } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SidebarRightComponent } from './shared/sidebar-right/sidebar-right.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardGeneralComponent } from './pages/dashboard-general/dashboard-general.component';

import { ChartsModule } from '@progress/kendo-angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';
import { PopupModule } from '@progress/kendo-angular-popup';
import { FormsModule } from '@angular/forms';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { NotfoundComponent } from './pages/system/notfound/notfound.component';
import { UnauthorizedComponent } from './pages/system/unauthorized/unauthorized.component';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { authInterceptorProviders } from './interceptors/auth.interceptor';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { GaugesModule } from "@progress/kendo-angular-gauges";
import { LabelModule } from "@progress/kendo-angular-label";
import { SliderModule } from "@progress/kendo-angular-inputs";

@NgModule({
    imports: [
        NgScrollbarModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ChartsModule,
        BrowserAnimationsModule,
        PopupModule,
        FormsModule,
        NotificationModule,
        GridModule,
        ExcelModule,
        DateInputsModule,
        ExcelExportModule,
        DropDownsModule,
        DialogsModule,
        GaugesModule,
        LabelModule,
        SliderModule
    ],
    declarations: [
        AppComponent,
        LoginLayoutComponent,
        LoginComponent,
        AdminLayoutComponent,
        HeaderComponent,
        SidebarComponent,
        SidebarRightComponent,
        FooterComponent,
        BlankLayoutComponent,
        NotfoundComponent,
        UnauthorizedComponent,
        DashboardGeneralComponent
    ],

    providers: [authInterceptorProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }

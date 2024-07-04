import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { IntlService } from '@progress/kendo-angular-intl';
import { User } from '../../models/user.model';
import { AuthenticationService } from '../../services/authentication.service';
import { CommonService } from '../../services/common.service';
import { Utils } from '../../utils';
import { GeneralResult } from '../../models/GeneralResult.model';
import { RptDashboard } from '../../models/rptDashboard.model';

declare var $: any

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, AfterViewInit {
  currentUser: User = new User;

  listGeneralResult: Array<GeneralResult> = [];
  dataLoaded: boolean = false;

  gridData: RptDashboard[] = [];
  title_cmonth: string = '';
  title_pmonth: string = '';

  row1: RptDashboard = {
    information: '+ Phí bảo hiểm gốc & khác',
    cmonthPremium: 0,
    pmonthPremium: 0,
    cmonthSumPremium: 0,
    pmonthSumPremium: 0,
    growth: '0%',
    tmonthPremium: 0,
    monthKpi: '0%',
    yearKpi: '0%'
  }

  row2: RptDashboard = {
    information: '------ Trong đó: Bancas',
    cmonthPremium: 0,
    pmonthPremium: 0,
    cmonthSumPremium: 0,
    pmonthSumPremium: 0,
    growth: '0%',
    tmonthPremium: 0,
    monthKpi: '0%',
    yearKpi: '0%'
  }

  row3: RptDashboard = {
    information: '+ Phí nhận tái bảo hiểm',
    cmonthPremium: 0,
    pmonthPremium: 0,
    cmonthSumPremium: 0,
    pmonthSumPremium: 0,
    growth: '0%',
    tmonthPremium: 0,
    monthKpi: '0%',
    yearKpi: '0%'
  }

  scrHeight: any;
  scrWidth: any;

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
  }

  constructor(private authenticationService: AuthenticationService, private intl: IntlService, private commonService: CommonService) {
    this.getScreenSize();
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
    });

  }

  ngOnInit(): void {
    Utils.activeSubmenu();
    this.loadBranches();
    // this.loadGeneralResultData();
    this.loadGridHeaders();
  }

  ngAfterViewInit(): void {
    $(".app").removeClass("login-img").addClass("light-mode");
  }

  loadGridHeaders() {
    var dd = new Date().getDate();
    var cm = new Date().getMonth() + 1;
    var cy = new Date().getFullYear();

    this.title_cmonth = (dd - 1).toString() + '.' + cm.toString() + '.' + cy.toString();
    this.title_pmonth = cm.toString() + '.' + (cy - 1).toString();
  }

  loadBranches() {
    this.commonService.getBranches().subscribe(response => {
      if (response) {
        localStorage.setItem('listBranch', JSON.stringify(response));
      }

    }, (err: HttpErrorResponse) => {
      console.log(err.status);
    });
    localStorage.setItem('listBranch', JSON.stringify(this.commonService.getBranchesTest()));
  }
  // loadGeneralResultData() {
  //   this.dataLoaded = false;

  //   this.commonService.getGeneralResult().subscribe(response => {
  //     this.listGeneralResult = response;

  //     let totalData = this.listGeneralResult.filter((obj) => {
  //       return obj.id === 1;
  //     });

  //     let monthData = this.listGeneralResult.filter((obj) => {
  //       return obj.id === 20;
  //     });

  //     this.row1.cmonthPremium = monthData[0].cValue;
  //     this.row1.pmonthPremium = monthData[0].pValue;
  //     this.row1.tmonthPremium = monthData[0].tValue;

  //     this.row1.cmonthSumPremium = totalData[0].cValue;
  //     this.row1.pmonthSumPremium = totalData[0].pValue;

  //     this.row1.growth = Number(((totalData[0].cValue! / totalData[0].pValue!) - 1) * 100).toFixed(2) + '%';
  //     this.row1.monthKpi = Number((monthData[0].cValue! / monthData[0].tValue!) * 100).toFixed(2) + '%';
  //     this.row1.yearKpi = Number((totalData[0].cValue! / totalData[0].tValue!) * 100).toFixed(2) + '%';

  //     ///////////////////////////////
  //     let totalBancasData = this.listGeneralResult.filter((obj) => {
  //       return obj.id === 5;
  //     });

  //     let monthBancasData = this.listGeneralResult.filter((obj) => {
  //       return obj.id === 38;
  //     });

  //     this.row2.cmonthPremium = monthBancasData[0].cValue;
  //     this.row2.pmonthPremium = monthBancasData[0].pValue;
  //     this.row2.tmonthPremium = monthBancasData[0].tValue;

  //     this.row2.cmonthSumPremium = totalBancasData[0].cValue;
  //     this.row2.pmonthSumPremium = totalBancasData[0].pValue;

  //     this.row2.growth = Number(((totalBancasData[0].cValue! / totalBancasData[0].pValue!) - 1) * 100).toFixed(2) + '%';
  //     this.row2.monthKpi = Number((monthBancasData[0].cValue! / monthBancasData[0].tValue!) * 100).toFixed(2) + '%';
  //     this.row2.yearKpi = Number((totalBancasData[0].cValue! / totalBancasData[0].tValue!) * 100).toFixed(2) + '%';

  //     ///////////////////////////////
  //     let totalReinsData = this.listGeneralResult.filter((obj) => {
  //       return obj.id === 55;
  //     });

  //     let monthReinsData = this.listGeneralResult.filter((obj) => {
  //       return obj.id === 56;
  //     });

  //     this.row3.cmonthPremium = monthReinsData[0].cValue;
  //     this.row3.pmonthPremium = monthReinsData[0].pValue;
  //     this.row3.tmonthPremium = monthReinsData[0].tValue;

  //     this.row3.cmonthSumPremium = totalReinsData[0].cValue;
  //     this.row3.pmonthSumPremium = totalReinsData[0].pValue;

  //     this.row3.growth = Number(((totalReinsData[0].cValue! / totalReinsData[0].pValue!) - 1) * 100).toFixed(2) + '%';
  //     this.row3.monthKpi = Number((monthReinsData[0].cValue! / monthReinsData[0].tValue!) * 100).toFixed(2) + '%';
  //     this.row3.yearKpi = Number((totalReinsData[0].cValue! / totalReinsData[0].tValue!) * 100).toFixed(2) + '%';


  //     ///////////////////
  //     this.gridData.push(this.row1);
  //     this.gridData.push(this.row2);
  //     this.gridData.push(this.row3);

  //     this.dataLoaded = true;
  //     $("#global-loader").hide();

  //   }, (err: HttpErrorResponse) => {
  //     console.log(err.status);
  //   });
  // }
}

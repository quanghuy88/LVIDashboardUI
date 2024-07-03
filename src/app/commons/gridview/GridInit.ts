import { GridDataResult, PageChangeEvent } from "@progress/kendo-angular-grid";
import { Observable } from "rxjs";

export class GridInit {
    public pageSearch: string = "";
    public page: any = 1;
    public pageSize: any = 50;
    public maxPageSize: any = 400000;
    public skip = 0;
    public take: any = 50;
    public gridView!: Observable<GridDataResult>;
    // table grid
    public pagerTypes = ["numeric", "input"];
    public type = "numeric";
    public buttonCount = 5;
    public info = true;
    public pageSizes = [50, 100, 200, 1000]; // default: true
    public previousNext = true;
    public position = "bottom";
    public showModalEdit: boolean = false;
    public forceProxy: boolean = false;
    public proxyURL: string = "";
    public configPagination: any = {
        buttonCount: this.buttonCount,
        info: this.info,
        type: this.type,
        pageSizes: this.pageSizes,
        previousNext: this.previousNext,
        position: this.position
    }

    public updateGridPaging(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.pageSize = event.take;
    }
}
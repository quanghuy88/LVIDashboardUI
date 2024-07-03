import { Page } from "./Page";

export class Filter {

    page: Page;
    customize?: any;

    constructor(page: Page, customize: any) {
        this.page = page;
        this.customize = customize;
    }
}
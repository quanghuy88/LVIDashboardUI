export class RptDashboard {
    information: string | undefined;
    cmonthPremium: number | undefined;
    pmonthPremium: number | undefined;
    cmonthSumPremium: number | undefined;
    pmonthSumPremium: number | undefined;
    growth: string | undefined;
    tmonthPremium: number | undefined;
    monthKpi: string | undefined;
    yearKpi: string | undefined;
}

export class RptDashboardGrid {
    list: Array<RptDashboard> | undefined;
    total: number | undefined;
}  
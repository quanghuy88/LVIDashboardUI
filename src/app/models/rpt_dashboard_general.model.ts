import { bhg_nnv_lk } from "./bhg_nnv_lk.model";
import { bhg_thang } from "./bhg_thang.model";
import { tlbtgl_nnv_lk } from "./tlbtgl_nnv_lk.model";

export class rpt_dashboard_general {
    thanght: string | undefined;
    thangtruoc: string | undefined;
    bhg_mt_nam: string | undefined;
    bhg_lk_ht: string | undefined;
    bhg_lk_namtruoc: string | undefined;
    bhg_lk_tt: string | undefined;
    bhg_lk_tlht: string | undefined;
    dt_mt_thanght: string | undefined;
    dt_thang_ht: string | undefined;
    dt_thang_tlht: string | undefined;
    dt_thang_namtruoc: string | undefined;
    dt_thang_tt: string | undefined;
    ln_lk_thanght: string | undefined;
    ln_mt_nam: string | undefined;
    ln_lk_tlht: string | undefined;
    ln_lk_namtruoc: string | undefined;
    ln_lk_tt: string | undefined;
    tlbtgl_lk_namht: string | undefined;
    tlbtgl_lk_namtruoc: string | undefined;
    TLKH_LK_NamHT: string | undefined;
    TLKHDNamTruoc: string | undefined;
    bhg_thangs: bhg_thang[] | undefined;
    bhg_nnv_lks: bhg_nnv_lk[] | undefined;
    tlbtgl_nnv_lks: tlbtgl_nnv_lk[] | undefined;
}
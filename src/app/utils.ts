declare var $: any

export class Utils {
    public static activeSubmenu() {
        var prevWidth: any = [];
        var arrayloc = window.location.pathname.split('/');
        //let position = "/" + arrayloc[arrayloc.length - 1];        
        let position = arrayloc.join('/');
        //console.log("position: ", position);

        var listMenu = $(".app-sidebar li a");

        //$(".app-sidebar li a").each(function (e: any) {
        for (let i = 0; i < listMenu.length; i++) {
            //var $this = $(e.target).parent('a'); //$(this);  "side-menu__item.has-link"
            var $this = $(listMenu[i]);
            var pageUrl = $this.attr("href");
            let prevValue = [window.innerWidth];
            if (prevValue.length > 1) {
                prevValue = prevWidth[prevWidth.length - 2];
            }
            $(listMenu[i]).removeClass('active');
            $(listMenu[i]).parent().removeClass('active');

            //console.log("pageUrl: ", pageUrl);
            if (pageUrl === position) {
                //console.log("pageUrl: ", pageUrl);
                setTimeout(() => {
                    if ($this.closest('.sub-slide-menu2')) {
                        $this.closest('.sub-slide-menu2').addClass('open');
                        if (!document.querySelector('body')!.classList.contains('horizontal') || window.innerWidth < 992) {
                            $this.closest('.sub-slide-menu2').slideDown();
                        }
                        $this.closest('.sub-slide-menu2').prev().addClass('active');
                        $this.closest('.sub-slide-menu2').parent().addClass('is-expanded');
                    }
                    if ($this.closest('.sub-slide-menu')) {
                        $this.closest('.sub-slide-menu').addClass('open');
                        if (!document.querySelector('body')!.classList.contains('horizontal') || window.innerWidth < 992) {
                            $this.closest('.sub-slide-menu').slideDown();
                        }
                        $this.closest('.sub-slide-menu').parent().addClass('is-expanded');
                        $this.closest('.sub-slide-menu').prev().addClass('active');

                    }
                    if ($this.closest('.slide-menu')) {
                        $this.closest('.slide-menu').addClass('open');
                        if (!document.querySelector('body')!.classList.contains('horizontal') || window.innerWidth < 992) {
                            $this.closest('.slide-menu').slideDown();
                        }
                        $this.closest('.slide-menu').parent().addClass('is-expanded');
                        $this.closest('.slide-menu').prev().addClass('active');

                    }
                    //$this.addClass('active');
                    $(listMenu[i]).addClass('active');
                    $(listMenu[i]).parent().addClass('active');

                    if (document.body.classList.contains('double-menu-tabs') || document.body.classList.contains('double-menu')) {
                        if ($this.closest('.slide-menu').length) {
                            $this.closest('.slide-menu').addClass('double-menu-active');
                        }
                        else {
                            let slideMenu = document.querySelectorAll('.slide-menu'),
                                slideNavStatus = false;
                            slideMenu.forEach(e => {
                                if (e.classList.contains('double-menu-active')) {
                                    slideNavStatus = true;
                                }
                            })
                            if (!slideNavStatus) {
                                document.body.classList.add('sidenav-toggled');
                            }
                        }
                    }

                    console.log("url:", position);
                    if (position.indexOf('-') == -1) {
                        $(".hasSubMenu").removeClass('active');
                        $(".hasSubMenu").parent().removeClass('is-expanded');
                        $(".hasSubMenu").parent().children('.slide-menu').removeClass('open');
                        $(".hasSubMenu").parent().children('.slide-menu').attr("style", "display: none;");
                    }

                    if (position.indexOf('accrpt') > -1) {
                        $("#accRpt").addClass('active');
                        $("#accRpt").parent().addClass('is-expanded');

                        $("#finRpt").removeClass('active');
                        $("#finRpt").parent().removeClass('is-expanded');
                        $("#finRpt").parent().children('.slide-menu').removeClass('open');
                        $("#finRpt").parent().children('.slide-menu').attr("style", "display: none;");

                        $("#tt67Rpt").removeClass('active');
                        $("#tt67Rpt").parent().removeClass('is-expanded');
                        $("#tt67Rpt").parent().children('.slide-menu').removeClass('open');
                        $("#tt67Rpt").parent().children('.slide-menu').attr("style", "display: none;");

                        $("#lku").removeClass('active');
                        $("#lku").parent().removeClass('is-expanded');
                        $("#lku").parent().children('.slide-menu').removeClass('open');
                        $("#lku").parent().children('.slide-menu').attr("style", "display: none;");
                    }

                    if (position.indexOf('finrpt') > -1) {
                        $("#finRpt").addClass('active');
                        $("#finRpt").parent().addClass('is-expanded');

                        $("#accRpt").removeClass('active');
                        $("#accRpt").parent().removeClass('is-expanded');
                        $("#accRpt").parent().children('.slide-menu').removeClass('open');
                        $("#accRpt").parent().children('.slide-menu').attr("style", "display: none;");

                        $("#tt67Rpt").removeClass('active');
                        $("#tt67Rpt").parent().removeClass('is-expanded');
                        $("#tt67Rpt").parent().children('.slide-menu').removeClass('open');
                        $("#tt67Rpt").parent().children('.slide-menu').attr("style", "display: none;");

                        $("#lku").removeClass('active');
                        $("#lku").parent().removeClass('is-expanded');
                        $("#lku").parent().children('.slide-menu').removeClass('open');
                        $("#lku").parent().children('.slide-menu').attr("style", "display: none;");
                    }

                    if (position.indexOf('lku') > -1) {
                        $("#lku").addClass('active');
                        $("#lku").parent().addClass('is-expanded');

                        $("#accRpt").removeClass('active');
                        $("#accRpt").parent().removeClass('is-expanded');
                        $("#accRpt").parent().children('.slide-menu').removeClass('open');
                        $("#accRpt").parent().children('.slide-menu').attr("style", "display: none;");

                        $("#tt67Rpt").removeClass('active');
                        $("#tt67Rpt").parent().removeClass('is-expanded');
                        $("#tt67Rpt").parent().children('.slide-menu').removeClass('open');
                        $("#tt67Rpt").parent().children('.slide-menu').attr("style", "display: none;");

                        $("#accRpt").removeClass('active');
                        $("#accRpt").parent().removeClass('is-expanded');
                        $("#accRpt").parent().children('.slide-menu').removeClass('open');
                        $("#accRpt").parent().children('.slide-menu').attr("style", "display: none;");
                    }

                }, 200);
            }
        };
    }

    public static setCheck() {
        const d = new Date();
        let day = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        let cm = '';
        if (month < 10)
            cm = year.toString() + '0' + month.toString();
        else
            cm = year.toString() + month.toString();
        if (day <= 10)
            $("#acc-" + cm).prop('checked', false);
    }

    public static getAccountMonth(d: Date) {
        let month = '' + (d.getMonth() + 1);
        let year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;

        return [year, month].join('');
    }

    public static formatDate(d: Date) {
        let yyyy = d.getFullYear();
        let mm = (d.getMonth() + 1).toString(); // Months start at 0!
        let dd = d.getDate().toString();

        if (Number(dd) < 10) {
            dd = '0' + dd;
        }
        if (Number(mm) < 10) {
            mm = '0' + mm;
        }

        return dd + '/' + mm + '/' + yyyy;
    }

    public static calPercent(value1: number, value2: number) {
        if (value1 && value2) {
            let r = Number(value1 * 100 / value2).toFixed(2);
            return r;
        } else {
            return '-'
        }

    }

    public static checkValid(roleList: string, userRole: string) {
        let r = false;
        let n = roleList.split(',').length;
        for (let i = 0; i < n; i++) {
            if (roleList.split(',')[i].trim() === userRole) {
                r = true;
                break;
            }
        }

        return r;
    }
}
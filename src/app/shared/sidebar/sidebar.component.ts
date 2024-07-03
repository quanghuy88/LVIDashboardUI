import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { User } from '../../models/user.model';
import { CommonService } from '../../services/common.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Branch } from '../../models/branch.model';
import { Utils } from '../../utils';

declare var $: any

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  currentUser: User = new User;
  listBranch: Array<Branch> = [];

  constructor(private commonService: CommonService, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  ngOnInit(): void {
    this.loadBranchData();
    //this.initSideBar();          
  }

  ngAfterViewInit(): void {
    this.toggleSidebar();
    $(window).resize(this.toggleSidebar);

    this.responsive();
    this.hovermenu();

    this.menuClick();

    Utils.activeSubmenu();

    let slideLeft = document.querySelector(".slide-left")!;
    let slideRight = document.querySelector(".slide-right")!;
    slideLeft.addEventListener("click", e => this.slideClick(), true);
    slideRight.addEventListener("click", e => this.slideClick(), true);
  }

  checkValid(roleList: string) {
    let r = false;
    let n = roleList.split(',').length;
    for (let i = 0; i < n; i++) {
      if (roleList.split(',')[i].trim() === this.currentUser.role) {
        r = true;
        break;
      }
    }

    return r;
  }

  loadBranchData() {
    const storageBranchesAsStr = localStorage.getItem('listBranch');
    if (storageBranchesAsStr) {
      this.listBranch = JSON.parse(storageBranchesAsStr);
      this.listBranch = this.listBranch.sort(function (first: any, second: any) {
        return first.name.localeCompare(second.name);
      });
    } else {
      this.commonService.getBranches().subscribe(response => {
        this.listBranch = response;

        this.listBranch = this.listBranch.sort(function (first: any, second: any) {
          return first.name.localeCompare(second.name);
        });

        // this.userBranchName = this.listBranch.filter((obj) => {
        //   return obj.id === this.currentUser.branchId;
        // })[0].name!;     

      }, (err: HttpErrorResponse) => {
        console.log(err.status);
      });
    }

  }

  initSideBar() {
    $(document).on('click', '[data-bs-toggle="sidebar"]', function (event: any) {
      event.preventDefault();
      // $('.app').toggleClass('sidenav-toggled');
      if ($('.app').hasClass('sidenav-toggled')) {
        $('.app').removeClass('sidenav-toggled');
        if ((document.body.classList.contains("double-menu") || document.body.classList.contains("double-menu-tabs")) && !document.body.classList.contains('horizontal')) {
          if (document.querySelector('.slide-menu') && window.innerWidth >= 992) {
            let slidemenu = document.querySelectorAll('.slide-menu');
            slidemenu.forEach(e => {
              if (e.classList.contains('double-menu-active')) {
                e.classList.remove('double-menu-active')
              }
            })
            let sidemenuActive = document.querySelector('.side-menu__item.active');
            if (sidemenuActive?.nextElementSibling) {
              let submenu = sidemenuActive.nextElementSibling;
              submenu.classList.add('double-menu-active');
              document.body.classList.remove('sidenav-toggled');
            }
            else {
              document.body.classList.add('sidenav-toggled');
            }
          }
        }
      }
      else {
        $('.app').addClass('sidenav-toggled');
        if (innerWidth >= 992) {
          if ((document.body.classList.contains("double-menu") || document.body.classList.contains("double-menu-tabs")) && !document.body.classList.contains('horizontal')) {
            if (document.querySelector('.slide-menu')) {
              let slidemenu = document.querySelectorAll('.slide-menu');
              slidemenu.forEach(e => {
                if (e.classList.contains('double-menu-active')) {
                  e.classList.remove('double-menu-active')
                }
              })
            }
          }
        }
      }
    });
  }

  toggleSidebar() {
    var w = $(window);
    if (w.outerWidth() <= 1024) {
      $("body").addClass("sidebar-gone");
      $(document).off("click", "body").on("click", "body", function (e: any) {
        if ($(e.target).hasClass('sidebar-show') || $(e.target).hasClass('search-show')) {
          $("body").removeClass("sidebar-show");
          $("body").addClass("sidebar-gone");
          $("body").removeClass("search-show");
        }
      });
    } else {
      $("body").removeClass("sidebar-gone");
    }
  }

  responsive() {
    let currentWidth = [window.innerWidth];
    const mediaQuery = window.innerWidth;
    currentWidth.push(mediaQuery);
    if (currentWidth.length > 2) { currentWidth.shift() }
    if (currentWidth.length > 1) {
      if ((currentWidth[currentWidth.length - 1] < 992) && (currentWidth[currentWidth.length - 2] >= 992)) {
        // less than 992
      }

      if ((currentWidth[currentWidth.length - 1] >= 992) && (currentWidth[currentWidth.length - 2] < 992)) {
        // greater than 992

        if (document.body.classList.contains("double-menu") || document.body.classList.contains("double-menu-tabs")) {
          document.body.classList.remove("sidenav-toggled");
        }
      }
    }
  }

  hovermenu() {
    $(".app-sidebar").hover(function () {
      if ($('.app').hasClass('sidenav-toggled')) {
        $('.app').addClass('sidenav-toggled-open');
      }
    }, function () {
      if ($('.app').hasClass('sidenav-toggled')) {
        $('.app').removeClass('sidenav-toggled-open');
      }
    });
  }

  slideClick() {
    let slide = document.querySelectorAll(".slide");
    let slideMenu = document.querySelectorAll(".slide-menu");
    slide.forEach((element, index) => {
      if (element.classList.contains("is-expanded") == true) {
        element.classList.remove("is-expanded")
      }
    });
    slideMenu.forEach((element, index) => {
      if (element.classList.contains("open") == true) {
        element.classList.remove("open");
        //element.style.display = "none";
        element.classList.remove("show");
      }
    });
  }

  menuClick() {
    $("[data-bs-toggle='slide']").off('click');
    $("[data-bs-toggle='sub-slide']").off('click')
    $("[data-bs-toggle='sub-slide2']").off('click')
    $("[data-bs-toggle='slide']").on('click', function (e: any) {
      var $this = $(e.target).parent('a'); //$("[data-bs-toggle='slide']");
      var checkElement = $this.next();
      var animationSpeed = 300, slideMenuSelector = '.slide-menu';
      if (checkElement.is(slideMenuSelector) && checkElement.is(':visible')) {
        checkElement.slideUp(animationSpeed, function () {
          checkElement.removeClass('open');
        });
        checkElement.parent("li").removeClass("is-expanded");
      }
      else if ((checkElement.is(slideMenuSelector)) && (!checkElement.is(':visible'))) {
        var parent = $this.parents('ul').first();
        var ul = parent.find('ul[class^="slide-menu"]:visible').slideUp(animationSpeed);
        ul.removeClass('open');
        var parent_li = $this.parent("li");
        checkElement.slideDown(animationSpeed, function () {
          checkElement.addClass('open');
          parent.find('li.is-expanded').removeClass('is-expanded');
          parent_li.addClass('is-expanded');
        });
      }
      if (checkElement.is(slideMenuSelector)) {
        e.preventDefault();
      }


      if (window.innerWidth >= 992) {
        if (!checkElement.hasClass('double-menu-active') && !document.body.classList.contains('horizontal') && (document.body.classList.contains('double-menu') || document.body.classList.contains('double-menu-tabs'))) {

          if (document.querySelector('.slide-menu')) {
            let slidemenu = document.querySelectorAll('.slide-menu');
            slidemenu.forEach(e => {
              if (e.classList.contains('double-menu-active')) {
                e.classList.remove('double-menu-active')
              }
            })
          }

          checkElement.addClass('double-menu-active');
          document.body.classList.remove("sidenav-toggled")
        }
      }
    });
    // Activate sidebar slide toggle	   
    /* 
    $("[data-bs-toggle='sub-slide']").on('click', function (e: any) {
      var $this = $("[data-bs-toggle='sub-slide']");
      var checkElement = $this.next();
      var animationSpeed = 300,
        slideMenuSelector = '.sub-slide-menu';
      if (checkElement.is(slideMenuSelector) && checkElement.is(':visible')) {
        checkElement.slideUp(animationSpeed, function () {
          checkElement.removeClass('open');
        });
        checkElement.parent("li").removeClass("is-expanded");
      }
      else if ((checkElement.is(slideMenuSelector)) && (!checkElement.is(':visible'))) {
        var parent = $this.parents('ul').first();
        var ul = parent.find('ul[class^="sub-slide-menu"]:visible').slideUp(animationSpeed);
        ul.removeClass('open');
        var parent_li = $this.parent("li");
        checkElement.slideDown(animationSpeed, function () {
          checkElement.addClass('open');
          parent.find('li.is-expanded').removeClass('is-expanded');
          parent_li.addClass('is-expanded');
        });
      }
      if (checkElement.is(slideMenuSelector)) {
        e.preventDefault();
      }
    });
    // Activate sidebar slide toggle	
    $("[data-bs-toggle='sub-slide2']").on('click', function (e: any) {
      var $this = $("[data-bs-toggle='sub-slide2']");
      var checkElement = $this.next();
      var animationSpeed = 300,
        slideMenuSelector = '.sub-slide-menu2';
      if (checkElement.is(slideMenuSelector) && checkElement.is(':visible')) {
        checkElement.slideUp(animationSpeed, function () {
          checkElement.removeClass('open');
        });
        checkElement.parent("li").removeClass("is-expanded");
      }
      else if ((checkElement.is(slideMenuSelector)) && (!checkElement.is(':visible'))) {
        var parent = $this.parents('ul').first();
        var ul = parent.find('ul[class^="sub-slide-menu"]:visible').slideUp(animationSpeed);
        ul.removeClass('open');
        var parent_li = $this.parent("li");
        checkElement.slideDown(animationSpeed, function () {
          checkElement.addClass('open');
          parent.find('li.is-expanded').removeClass('is-expanded');
          parent_li.addClass('is-expanded');
        });
      }
      if (checkElement.is(slideMenuSelector)) {
        e.preventDefault();
      }
    });
    */
  }

}

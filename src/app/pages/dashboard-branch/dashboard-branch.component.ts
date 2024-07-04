import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-branch',
  templateUrl: './dashboard-branch.component.html',
  styleUrl: './dashboard-branch.component.css'
})
export class DashboardBranchComponent {
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
  }
}

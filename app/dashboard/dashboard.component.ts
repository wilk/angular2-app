import {Component, OnInit} from '@angular/core'
import {Router, NavigationEnd, Event as NavigationEvent} from '@angular/router'

@Component({
    moduleId: module.id,
    selector: 'ma-dashboard',
    templateUrl: './dashboard.html'
})
export class DashboardComponent implements OnInit {
    public onDashboard: boolean = true

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.router.events.subscribe((event: NavigationEvent) => {
            if (event instanceof NavigationEnd) {
                this.onDashboard = this.router.url === '/'
            }
        })
    }
}
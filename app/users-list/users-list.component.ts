import {Component, OnInit} from '@angular/core'
import {User} from "../interfaces";
import {AgendaService} from "../services/agenda.service";

@Component({
    moduleId: module.id,
    selector: 'ma-users-list',
    templateUrl: './users-list.html'
})
export class UsersListComponent implements OnInit {
    public users: User[] = []
    public currentTab: string = 'all'
    
    constructor(private agenda: AgendaService) {}
    
    ngOnInit(): void {
        //this.users = this.agenda.list()
        this.agenda.list().subscribe((users: User[]) => this.users = users)
    }

    onStar(user: User): void {
        user.star = !user.star
        this.agenda.update(user)
            .subscribe(() => {})
    }

    onTabChange(tab: string): void {
        this.currentTab = tab
    }
}
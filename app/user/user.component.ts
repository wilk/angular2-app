import {Component, OnInit} from '@angular/core'
import {Router, Params, ActivatedRoute} from '@angular/router'
import {User} from "../interfaces";
import {AgendaService} from "../services/agenda.service";

@Component({
    moduleId: module.id,
    selector: 'ma-user',
    templateUrl: './user.html'
})
export class UserComponent implements OnInit {
    public user: User = {
        id: null,
        name: '',
        email: '',
        country: '',
        address: '',
        mobile: ''
    }

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
    private agenda: AgendaService) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            if (params['userId']) {
                //this.user = this.agenda.get(parseInt(params['userId']))
                this.agenda.get(params['userId'])
                    .subscribe((user: User) => this.user = user)
            }
        })
    }
    
    onSubmit(user: User): void {
        let fn = user.id === null ? this.agenda.insert : this.agenda.update

        fn(user).subscribe(() => this.router.navigate(['/']))

        /*if (user.id === null) {
            this.agenda.insert(user)
                .subscribe(() => this.router.navigate(['/']))
        }
        else {
            this.agenda.update(user)
                .subscribe(() => this.router.navigate(['/']))
        }*/
    }
    
    onRemove(userId: number): void {
        
    }
}
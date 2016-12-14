import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpModule} from '@angular/http'
import {Route, RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'

import {AppComponent}  from './app.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {UsersListComponent} from "./users-list/users-list.component";
import {UserComponent} from "./user/user.component";
import {AgendaService} from "./services/agenda.service";
import {StarredPipe} from "./pipes/starred.pipe";

let routes: Route[] = [{
    path: '',
    component: DashboardComponent,
    children: [{
        path: '',
        component: UsersListComponent
    }, {
        path: 'users',
        component: UserComponent
    }, {
        // http://localhost:3000/users/10
        path: 'users/:userId',
        component: UserComponent
    }]
}]

@NgModule({
    imports: [BrowserModule,
        HttpModule, FormsModule,
        RouterModule.forRoot(routes)],
    declarations: [AppComponent, 
        UserComponent,
        UsersListComponent,
        DashboardComponent,
        StarredPipe],
    providers: [AgendaService],
    bootstrap: [AppComponent]
})
export class AppModule {}

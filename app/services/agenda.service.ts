import {Injectable} from '@angular/core'
import {User} from "../interfaces";
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs'
import 'rxjs/add/operator/map'

@Injectable()
export class AgendaService {
    /*public users: User[] = [{
        id: 0,
        name: 'foo',
        address: 'foo foo',
        country: 'italy',
        email: 'foo@foo.com',
        mobile: '1292012120',
        star: false
    }, {
        id: 1,
        name: 'bar',
        address: 'bar bar',
        country: 'UK',
        email: 'bar@bar.com',
        mobile: '1839179',
        star: true
    }, {
        id: 2,
        name: 'tak',
        address: 'tak tak',
        country: 'USA',
        email: 'tak@tak.com',
        mobile: '187491373191',
        star: false
    }]*/

    public users: User[] = []

    constructor(private http: Http) {}
    
    list(): Observable<User[]> {
        //return this.users
        return this.http.get('http://localhost:3005/contacts')
            .map((res: Response) => res.json())
    }
    
    get(userId: number): Observable<User> {
        return this.http.get(`http://localhost:3005/contacts/${userId}`)
            .map((res: Response) => res.json())
    }
    
    insert(user: User): Observable<User> {
        return this.http.post('http://localhost:3005/contacts', user)
            .map((res: Response) => res.json())
    }

    update(user: User): Observable<User> {
        return this.http.put(`http://localhost:3005/contacts/${user.id}`, user)
            .map((res: Response) => res.json())
    }

    remove(userId: number): Observable<void> {
        return this.http.delete(`http://localhost:3005/contacts/${userId}`)
            .map((res: Response) => res.json())
    }
}
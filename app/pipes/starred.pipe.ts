import {Pipe, PipeTransform} from '@angular/core'
import {User} from "../interfaces";

@Pipe({
    name: 'starred',
    pure: false
})
export class StarredPipe implements PipeTransform {
    transform(users: User[] = [], starred: boolean = false): User[] {
        if (starred) return users.filter((user: User) => user.star === starred)
        else return users
    }
}
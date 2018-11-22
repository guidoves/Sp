import { Injectable } from '@angular/core';
import { GlobalService } from './global.services';
import { User } from '../classes/User';


@Injectable({
    providedIn: 'root'
})

export class UserServices {

    constructor(private _global: GlobalService) { }

    newUser(user: User) {

        const body = {
            'user_name': user.name,
            'profile': user.profile,
            'email': user.email,
            'password': user.password,
            'sexo': user.sexo
        };

        return this._global.post('users/new', body).toPromise();

    }

    allUsers() {
        return this._global.get('users/all').toPromise();
    }

}

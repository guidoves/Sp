import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from './global.services';
import { User } from '../classes/User';


@Injectable({
    providedIn: 'root'
})

export class LoginService {

    isLogin: number;

    user: User;

    constructor(private _router: Router, private _global: GlobalService) {
        this.isLogin = 0;

       this.checkLogin();

    }

    login(user: String, password: String, email: String, profile: String) {

        const body = {
            'user': user,
            'password': password,
            'email': email,
            'profile': profile
        };

        this.isLogin = -1;

        this._global.post('login', body)
        .subscribe((res: any) => {
            this.isLogin = 1;

            console.log(res);

            localStorage.setItem('auth', res.token);
            localStorage.setItem('user_name', res.usuario.user_name);

            this._router.navigate(['home']);


        }, (err) => {
            this.isLogin = 0;
        });

        /* const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        return this._http.post(this._global.URL_SERVER + 'login', body, options); */
    }

    logout() {

        localStorage.removeItem('token');

        this.user = null;

        this.isLogin = 0;
    }

    checkLogin() {

        if (localStorage.getItem('auth')) {
            this.isLogin = 1;
            this._router.navigate(['home']);

            /* const body = {
                token: localStorage.getItem('token')
            };

            this._global.post('login/checktoken', body)
            .subscribe(( res: any) => {

                // this.user = new User()

                this.isLogin = 1;
            }, (err) => {
                this.isLogin = 0;
            });
 */
        } else {
            this.isLogin = 0;
        }
    }

}

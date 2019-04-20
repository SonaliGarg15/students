import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { RegistrationForm } from '../interfaces/registrationForm';
import { UserLoginForm } from '../interfaces/userLoginForm';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    studentId$: BehaviorSubject<number> = new BehaviorSubject<number>(null);
    users$: BehaviorSubject<RegistrationForm[]> = new BehaviorSubject<RegistrationForm[]>([]);
    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
    @Output() isUserLogged: EventEmitter<any> = new EventEmitter();

    constructor(private http: HttpClient) { }

    isLoginSuccessful(user: UserLoginForm) {
        let key = "usersData";
        let userDataPresent = localStorage.hasOwnProperty(key);
        let usersData: RegistrationForm[] = [];
        if (userDataPresent === true) {
            usersData = JSON.parse(localStorage.getItem(key));
        }

        if (usersData.length === 0) {
            return false;
        }
        else {
            for (let index = 0; index < usersData.length; index++) {
                if (usersData[index].userName === user.userName && usersData[index].password === user.password) {
                    localStorage.setItem("LoggedInUser", user.userName);
                    localStorage.setItem('ACCESS_TOKEN', "access_token");
                    this.getLoggedInName.emit(user.userName);
                    this.isUserLogged.emit(true);
                    return true;
                }
            }
        }

        return false;
    }

    isUserLoggedIn() {        
        return localStorage.getItem('ACCESS_TOKEN') !== null;
    }

    getUserName(){
        return localStorage.getItem('LoggedInUser');
    }

    logout() {
        this.getLoggedInName.emit("");
        localStorage.removeItem('LoggedInUser');
        localStorage.removeItem('ACCESS_TOKEN');
    }

    addNewUser(newUser: RegistrationForm) {
        console.log("add user");
        let key = "usersData";
        let userDataPresent = localStorage.hasOwnProperty(key);
        console.log(userDataPresent);
        let usersData: RegistrationForm[] = [];
        if (userDataPresent === true) {
            usersData = JSON.parse(localStorage.getItem(key));
        }
        usersData.push(newUser);
        localStorage.setItem(key, JSON.stringify(usersData));
        this.users$.next(usersData);
    }
}


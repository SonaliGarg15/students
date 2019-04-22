import { Injectable, EventEmitter, Output } from '@angular/core';
import { RegistrationForm } from '../interfaces/registrationForm';
import { UserLoginForm } from '../interfaces/userLoginForm';
import { LoginResult } from '../interfaces/loginResult';
import { RegistrationResult } from '../interfaces/registrationResult';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
    @Output() isUserLogged: EventEmitter<any> = new EventEmitter();

    constructor() { }

    /**
     * verify if the credentials entered by the user are correct or not and send the login result
     * @param user 
     */
    isLoginSuccessful(user: UserLoginForm) {
        let key = "usersData";
        let userDataPresent = localStorage.hasOwnProperty(key);
        let usersData: RegistrationForm[] = [];
        let loginResult: LoginResult;
        if (userDataPresent === true) {
            usersData = JSON.parse(localStorage.getItem(key));
        }

        if (usersData.length !== 0) {
            for (let index = 0; index < usersData.length; index++) {
                if (usersData[index].userName.toLowerCase() === user.userName.toLowerCase()) {
                    if (usersData[index].password === user.password) {
                        localStorage.setItem("LoggedInUser", user.userName);
                        localStorage.setItem('ACCESS_TOKEN', "access_token");
                        this.getLoggedInName.emit(user.userName); // if login is successful, emit the user name
                        this.isUserLogged.emit(true); // if login is successful, emit that the user is logged in
                        loginResult = { isLoginSuccessFul: true, passwordIncorrect: false }
                        return loginResult;
                    }
                    else {
                        loginResult = { isLoginSuccessFul: false, passwordIncorrect: true }
                        return loginResult;
                    }
                }
            }
        }

        loginResult = { isLoginSuccessFul: false, passwordIncorrect: false }
        return loginResult;
    }

    /**
     * returns true if user is logged in and emit that user is logged in if so
     */
    isUserLoggedIn() {
        if (localStorage.hasOwnProperty('ACCESS_TOKEN')) {
            this.isUserLogged.emit(true);
        }
        return localStorage.getItem('ACCESS_TOKEN') !== null;
    }

    /**
     * get the current user logged in name
     */
    getUserName() {
        return localStorage.getItem('LoggedInUser');
    }

    /**
     * log out the user from the app
     */
    logout() {
        this.getLoggedInName.emit("");
        this.isUserLogged.emit(false);
        localStorage.removeItem('LoggedInUser');
        localStorage.removeItem('ACCESS_TOKEN');
    }

    /**
     * registers the new user in the app
     * @param newUser 
     */
    addNewUser(newUser: RegistrationForm) {
        let key = "usersData";
        let registrationResult: RegistrationResult;
        let userDataPresent = localStorage.hasOwnProperty(key);
        let usersData: RegistrationForm[] = [];
        if (userDataPresent === true) {
            usersData = JSON.parse(localStorage.getItem(key));
            for (let index = 0; index < usersData.length; index++) {
                if (usersData[index].userName === newUser.userName) {
                    registrationResult = { isregistrationSuccessFul: false, errorMessage: "UserName already exists." };
                    return registrationResult;
                }
                else if(usersData[index].email === newUser.email){
                    registrationResult = { isregistrationSuccessFul: false, errorMessage: "Email already exists." };
                    return registrationResult;
                }
            }
        }
        usersData.push(newUser);
        localStorage.setItem(key, JSON.stringify(usersData));
        registrationResult = { isregistrationSuccessFul: true, errorMessage: "" };
        return registrationResult;
    }
}


import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";

import * as firebase from 'firebase/app';

@Injectable()
export class AuthProvider {
    public providerGithub: firebase.auth.GithubAuthProvider;
    public providerEmail: firebase.auth.EmailAuthProvider;

    constructor(private afAuth: AngularFireAuth) {

    }

    loginUserWithGithub() {
        this.providerGithub = 
            new firebase.auth.GithubAuthProvider;
        this.providerGithub.addScope("user:email");
        return firebase.auth()
            .signInWithRedirect(this.providerGithub)
            .then(user=>Promise.resolve(user))
            .catch(err=>Promise.reject(err));
    }

}




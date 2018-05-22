import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';

import { AuthProvider } from "../../providers/auth";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheet: ActionSheetController,
    public auth: AuthProvider
  ) {
  }

  showMenu() {
    this.actionSheet.create({
      title: "Iniciar sesión",
      enableBackdropDismiss: true,
      buttons: [
        {
          text:'Github',
          role:'destructive',
          icon:'logo-github',
          handler: ()=> {
            console.log("Github");
            this.auth.loginUserWithGithub()
            .then(function(result) {
              console.log("Devuelto por Github"+
                      result);
              var token = result.credential.accessToken;
              var user = result.user;

            })
            .catch(function(error){
              console.log(error.message);
            });
          }
        },
        {
          text:'Twitter',
          role:'destructive',
          icon:'logo-twitter',
          handler: ()=> {
            console.log("Twitter");
          }
        }
      ]
    }).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}

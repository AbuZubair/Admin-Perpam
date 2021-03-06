import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import { RegisterPage } from '../register/register';
import { ResetpwdPage } from '../resetpwd/resetpwd';
import { HomePage } from '../home/home';
import firebase from 'firebase';


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

  @ViewChild('uname') user;
  @ViewChild('password') password;

 
  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signin(){
    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
    .then(data =>{
      console.log('got some data', firebase.auth());
      this.navCtrl.setRoot( HomePage );
    })
    .catch(error => {
      console.log('got error', error);
      this.alert(error.message);
    })
  }

  gotoregPage(){
    console.log("reg page");
    this.navCtrl.push(RegisterPage)
  }

  gotoresetpwdPage(){
    console.log("reset pwd page");
    this.navCtrl.push(ResetpwdPage)
  }




}

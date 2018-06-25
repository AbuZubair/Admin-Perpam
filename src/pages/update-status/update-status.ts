import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';
import { appoint } from '../../models/todo';
import { HomePage } from '../home/home';
import firebase from 'firebase';

/**
 * Generated class for the UpdateStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-status',
  templateUrl: 'update-status.html',
})
export class UpdateStatusPage {

  user:appoint;
  uid:any;
  keys:string;

  constructor(private fire:AngularFireAuth, private afDB: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.user = this.navParams.get('user');
  }
  

  updateStatus(status){
    this.afDB.list(`adminList/`).update(this.user.$key, {
      status : '1'
    }).then(updatePatient => {
      this.navCtrl.push(HomePage)
    },error=>{console.log(error);})
  }

}

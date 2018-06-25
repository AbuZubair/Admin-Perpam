import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { UpdateStatusPage } from '../update-status/update-status';
import { BuddychatPage } from '../buddychat/buddychat';
import { ExpenseService } from '../../providers/auth-service/auth-service'
import {LoginPage} from '../login/login';
import firebase from 'firebase';
import { appoint } from  '../../models/todo';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 // public users: Array<any> = [];
 public users: Observable<any[]>;
  today:string;
  select:number = 0;
  adminList = {
    name: '',
    myDate:'',
    almt:'',
    no:'',
    gr:'',
    o_n:'',
    spl:'',
    dr:'',
    tgl:'',
    status:'',
    cek:''
  };
  nilai: Array<any> = [];
  status:string;
  
  

  constructor(private _service: ExpenseService, private fire:AngularFireAuth, private afDB: AngularFireDatabase, 
    public navCtrl: NavController, public db: AngularFireDatabase, public app: App) {
    this.today = new Date().toISOString();
   this.users = this.afDB.list('/adminList');   
  /* var uids = [];
   this.nilai = [];
   firebase.database().ref('/appointment/').once('value').then(snapshot => {
     snapshot.forEach(function(child) {
       child.forEach(function(grandchild){
        console.log(grandchild.key);
        console.log(grandchild.val());
       });
      console.log(child.key);
      });
     }) */
  }

  ionViewWillLoad() {
    this.status = 'notconfirm';
  }

  logout() {
    console.log("logout")
    localStorage.removeItem("currentUser");
    this.app.getRootNav().setRoot(LoginPage);
  }

  
  getUsers() {
    return this.users ;
  }

  
 

}

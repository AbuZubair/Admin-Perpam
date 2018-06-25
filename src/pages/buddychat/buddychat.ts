import { Component,ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Content } from 'ionic-angular';
import { ChatProvider } from '../../providers/chat/chat';
import firebase from 'firebase';
import { appoint } from '../../models/todo';

/**
 * Generated class for the BuddychatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buddychat',
  templateUrl: 'buddychat.html',
})
export class BuddychatPage {
  
  @ViewChild('content') content: Content;
  user:appoint;
  newmessage:string = "Silahkan lakukan konfirmasi perjanjian:";
  allmessages = [];
  firebuddychats = firebase.database().ref('/buddychats');
  buddymessages = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public events: Events, public zone: NgZone) {
    this.scrollto();
    this.events.subscribe('newmessage', () => {
      this.allmessages = [];
      this.zone.run(() => {
        this.allmessages = this.buddymessages;
      })
    })
  }

  addmessage(newmessage) {
    if (this.user) {
      var promise = new Promise((resolve, reject) => {
        this.firebuddychats.child(firebase.auth().currentUser.uid).child(this.user.uid).push({
          sentby: firebase.auth().currentUser.uid,
          message: newmessage,
          message2: this.user.name,
          tnggl: this.user.tgl,
          timestamp: firebase.database.ServerValue.TIMESTAMP
        }).then(() => {
          this.firebuddychats.child(this.user.uid).child(firebase.auth().currentUser.uid).push({
            sentby: firebase.auth().currentUser.uid,
            message: newmessage,
            timestamp: firebase.database.ServerValue.TIMESTAMP
          }).then(() => {
            resolve(true);
            }).catch((err) => {
              reject(err);
          })
        })
      })
      return promise;
    }
}

getbuddymessages() {
    
  let temp;
  this.firebuddychats.child(firebase.auth().currentUser.uid).child(this.user.uid).on('value', (snapshot) => {
    this.buddymessages = [];
    temp = snapshot.val();
    for (var tempkey in temp) {
      this.buddymessages.push(temp[tempkey]);
    }
    this.events.publish('newmessage');
  })
}


ionViewDidEnter() {
  this.getbuddymessages();
}


  ionViewDidLoad() {
    this.user = this.navParams.get('user');
  }

  scrollto() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 1000);
}

}

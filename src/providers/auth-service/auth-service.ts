import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';
import firebase from 'firebase';


@Injectable()
export class ExpenseService {

    public users: FirebaseListObservable<any[]>;
    
    
 
   constructor(private afDB: AngularFireDatabase){
    this.users = this.afDB.list('/appointment');       
   }  

  getUser(){
    return this.users 
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { PipesModule } from '../pipes/pipes.module'

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { UpdateStatusPageModule } from '../pages/update-status/update-status.module'
import { BuddychatPageModule } from '../pages/buddychat/buddychat.module'
import { ViewStatusPageModule } from '../pages/view-status/view-status.module'

import { ExpenseService } from '../providers/auth-service/auth-service';
import { ChatProvider } from '../providers/chat/chat';

export const firebaseConfig = {
  apiKey: "AIzaSyAhdFk_z4-B4B3Jn94wgPkdYApKtnldf18",
  authDomain: "permata-pamulang019255.firebaseapp.com",
  databaseURL: "https://permata-pamulang019255.firebaseio.com",
  projectId: "permata-pamulang019255",
  storageBucket: "",
  messagingSenderId: "556987778562"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    UpdateStatusPageModule,
    ViewStatusPageModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
   
     
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ExpenseService,
    ChatProvider,
  ]
})
export class AppModule {}

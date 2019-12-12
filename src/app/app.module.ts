import { AddMemberPage } from './../pages/add-member/add-member';
import { AddMemberBasicPage } from './../pages/add-member-basic/add-member-basic';
import { AuthentPasswordPage } from './../pages/authent-password/authent-password';
import { AuthenMemberIdPage } from './../pages/authen-member-id/authen-member-id';
import { IntroduceClassroomPage } from './../pages/introduce-classroom/introduce-classroom';
import { SelectClassroomPage } from './../pages/select-classroom/select-classroom';
import { NewClassroomPage } from './../pages/new-classroom/new-classroom';
import { MembersPage } from './../pages/members/members';
import { FirebaseDataProvider } from './../provider/firebase_data_provider';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

const firebaseConfig = {
  apiKey: "AIzaSyA8tHJOYVM1DmeUVcDo_j6jpdG593h2iaM",
  authDomain: "dluproject.firebaseapp.com",
  databaseURL: "https://dluproject.firebaseio.com",
  projectId: "dluproject",
  storageBucket: "dluproject.appspot.com",
  messagingSenderId: "912956531663",
  appId: "1:912956531663:web:0514b7698efe55518828ba",
  measurementId: "G-11BCN7LZ0X"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MembersPage,
    NewClassroomPage,
    SelectClassroomPage,
    IntroduceClassroomPage,
    AuthenMemberIdPage,
    AuthentPasswordPage,
    AddMemberBasicPage,
    AddMemberPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MembersPage,
    NewClassroomPage,
    SelectClassroomPage,
    IntroduceClassroomPage,
    AuthenMemberIdPage,
    AuthentPasswordPage,
    AddMemberBasicPage,
    AddMemberPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseDataProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }

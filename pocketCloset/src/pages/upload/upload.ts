import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'upload.html'
})

export class UploadPage {
  images: any;
  categories: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public params: NavParams, public db: AngularFireDatabase, public afAuth: AngularFireAuth, public viewCtr: ViewController) {
      this.categories = this.db.list('categories');
  }

  close(){
    this.viewCtr.dismiss();
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoriesPage } from '../categories/categories';
import { UploadPage } from '../upload/upload';
import { Camera, CameraOptions} from '@ionic-native/camera';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})

export class HomePage {
  public photos: any;
  public base64Image: string;

  constructor(public navCtrl: NavController, private camera: Camera, public modalCtr: ModalController) {
  }

  showLists(){
    this.navCtrl.push(CategoriesPage);
  }

  takePhoto() {
    const options : CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: 1,
      correctOrientation: true
    }

    this
      .camera
      .getPicture(options)
      .then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.openModal(this.base64Image);
      }, (err) => {
        console.log(err);
      });
  }

  openLibrary(){
    const options : CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: 0,
      correctOrientation: true
    }

    this
      .camera
      .getPicture(options)
      .then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.openModal(this.base64Image);
      }, (err) => {
        console.log(err);
      });
  }

  openModal(photoSrc){
    let modal = this.modalCtr.create(UploadPage, {photo: photoSrc});
    modal.present();
  }
}

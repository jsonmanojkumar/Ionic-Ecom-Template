import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.scss'],
})
export class TrackOrderComponent implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {}
  address = [
    { id: 1, fName: "Manoj", lName: "Kumar", addresType: "Office", pin: 247452, landmark: "near Govt. School", city: "saharanpur", state: 'UP', address: "description for the card content. Nothing more, nothing less." },
  ]
  

  async cancellationAlert() {
    const alert = await this.alertController.create({
      header: 'Select cancel reason',
      mode:'ios',
      buttons: [ 
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: (data) => {
            console.log('Confirm Ok', data);
          },
        }
      ],
     
      inputs: [
        {
          label: 'Alerts can also include several different inputs whose data can be',
          type: 'radio',
          value: 'Alerts can also include several different inputs whose data can be',
        },
        {
          label: 'Alerts can also include several different inputs whose data can be',
          type: 'radio',
          value: 'Alerts can also include several different inputs whose data can be',
        },
        {
          label: 'Alerts can also include several different inputs whose data can be',
          type: 'radio',
          value: 'Alerts can also include several different inputs whose data can be',
        },
      ],
    });

    await alert.present();
  }

  goBack(){
    window.history.back()
  }
}

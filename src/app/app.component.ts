import { Component,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, ToastController } from '@ionic/angular';
import { Platform, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonRouterOutlet) routerOutlet: IonRouterOutlet;
  public showusericon: any;
  public login: any;
  userName: any;
  userEmail: any;
  userRole: any;
  userFlag: any;
  appVersionNumber: string;
  public appPages = [
    // { title: 'Home', url: '/home', icon: 'home' },
  ];
  constructor(
    public menuCtrl: MenuController,
    public router: Router, public toastController: ToastController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public alertController: AlertController,
    private appVersion: AppVersion,
  ) 
  
  {
    this.initializeApp();
  }

  ngOnInit() {
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString("#d87204")

      this.platform.backButton.subscribeWithPriority(0, () => {
        console.log('back', this.router.url);
        if (this.router.url === '/home' || this.router.url === '/login') {
          this.appExitAlertConfirm();
          // navigator['app'].exitApp();
        } else {
          this.routerOutlet.pop();
        }
      }
      );



      if (this.platform.is('android')) {
        // console.log("manoj");
        this.appVersion.getVersionNumber().then(response => {
          this.appVersionNumber = response;

        }).catch(error => {
          alert(error);
        });
      }
    }
    );
  }


  async appExitAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'App Exit Confirm!',
      message: 'Are you sure you want to exit the app?',
      mode: 'ios',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'danger',
        handler: (blah) => { }
      }, {
        text: 'Exit App',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    });

    await alert.present();
  }
}

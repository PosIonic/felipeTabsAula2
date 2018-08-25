import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {

  public teste: String = "ola mundo";
  public numeor: number;
  public qualquer: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public testeFunc():void{
    alert("1");

  }

  public testeFuncComParametro(a: number, b: number):number{
    return ( a + b );

  }

  ionViewDidLoad() {
    alert(this.testeFuncComParametro(2,4));
    console.log('ionViewDidLoad NoticiasPage');
  }

}

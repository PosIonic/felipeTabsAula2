import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilmesProvider } from '../../providers/filmes/filmes';

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',

   providers:[
     FilmesProvider
   ]
})
export class NoticiasPage {

  public obj_json = {
    titulo: "Felipe Marques guerra",
    data: "01 set 2018",
    descricao: "Sou um campo do json",
    likes: 222,
    comentarios: 55,
    hora_comentario: "20 seg atras"
  }
  
  public listaDeFilmes = new Array<any>();

  public teste: String = "ola mundo";
  public numeor: number;
  public qualquer: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public filmesProvider: FilmesProvider) {

  }

  public testeFunc():void{
    alert("1");

  }

  public testeFuncComParametro(a: number, b: number):number{
    return ( a + b );

  }

  ionViewDidLoad() {
    /*
    console.log("aui");
    this.filmesProvider.getLatestMovies().subscribe(

      data => {
        const response = (data as any);
        const obj = JSON.parse(response._body);
        console.log(obj); 
      },
      error => {
        console.log(error);
      }
    )

    alert(this.testeFuncComParametro(2,4));
    console.log('ionViewDidLoad NoticiasPage');
    */
   this.filmesProvider.getPopular().subscribe(

    data => {
      const response = (data as any);
      const obj = JSON.parse(response._body);
      this.listaDeFilmes = obj.results;
      console.log(obj); 
    },
    error => {
      console.log(error);
    }
  )
  }

}

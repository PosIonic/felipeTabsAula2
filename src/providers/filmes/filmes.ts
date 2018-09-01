import { Injectable } from '@angular/core';
import { Http } from '@angular/Http';

@Injectable()
export class FilmesProvider {

  //chave privada 
  public private_key: string = "188e9c23457f2b5eaaec9b30d68b4a35";
  public api_url = "https://api.themoviedb.org/3/";

  constructor(public http: Http) {
    console.log('Hello FilmesProvider Provider');
  }

  getLatestMovies() {
    return this.http.get(this.api_url + "movie/latest?api_key="+ this.private_key);
  }

  getPopular(){
    return this.http.get(this.api_url + "movie/popular?api_key="+ this.private_key);
  }

}

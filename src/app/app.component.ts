import { Component } from '@angular/core';
import { Rzecz } from './rzecz';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'powtorka4P';
  zmienna:number = 5;
  wybranarzecz!:Rzecz;
  czyWybrano:boolean = false;
  lista_rzeczy =[
    "jablka",
    "kot",
    "banan"
  ]
  wpisana_rzecz:string ="";
  dodaj():void{
    console.log("kliknięty przycisk");
    console.log(this.wpisana_rzecz);
    this.lista_rzeczy.push(this.wpisana_rzecz);
  
  }
  //jednoliniowy
  /*
  wieloliniowy
  */

  lista_obiektow =[
    new Rzecz("pierwsza rzecz","opis pierwszej rzeczy"),
    new Rzecz("druga rzecz","opis drugiej rzeczy"),
    new Rzecz ("trzecia rzecz","opis trzeciej rzeczy")
  ]
  wypisz_szcz(tarzecz:Rzecz):void{
    console.log(tarzecz.opis);
    console.log(tarzecz.tytul);
    this.wybranarzecz = tarzecz;
    this.czyWybrano = true;
  }
  polub():void{
    this.wybranarzecz.polubienia++;
  }
opisdodawany:string="";
tytuldodawany:string="";
  dodaj_do():void{
console.log(this.tytuldodawany);
let nowaRzecz = new Rzecz(this. tytuldodawany,this.opisdodawany);
this.lista_obiektow.push(nowaRzecz);
  }
}

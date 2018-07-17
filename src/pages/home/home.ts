import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Observable}from 'rxjs/Observable'
import 'rxjs/add/observable/interval'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  timerVar;
  timerVal;

  bread : boolean = false;
  NaC1  : boolean = false;
  eightstrings : boolean = false;
  Corona : boolean = false;
  Mozzarella : boolean = false;
  Paprika : boolean = false;
  WhiteChristmas : boolean = false;
  Fenry : boolean = false;
  RoxyMusic : boolean = false;
  MadonnaLouis : boolean = false;
  RobBowman : boolean = false;
  FiftyThree : boolean = false;
  Sailor : boolean = false;
  AustinPowers : boolean = false;
  Sixtoes : boolean = false;
  Terricelli : boolean = false;
  byr : boolean = false;
  Aliminium : boolean = false;
  Mercury : boolean = false;
  fivenines : boolean = false;
  Clavical : boolean = false;
  ninetyseven : boolean = false;
  Ganges : boolean = false;
  fourthousand : boolean = false;

  results: number;
  show: string;

  score : number = 0;

  constructor(public navCtrl: NavController) {
    this.results = 0;


this.startTimer()
  }
  startTimer(){
    this.timerVar = Observable.interval(1000).subscribe( x => {
      console.log(x)
      this.timerVal = x;

      if(x == 30000){
        this.timerVar.unsubscribe()
      }
    })
  }

  viewResults(){
    this.results = 1;

    if(this.bread == true){

    this.score = this.score + 1;
    }

    if(this.NaC1 == true){
     
    this.score = this.score + 1;
    }

    if(this.eightstrings == true){
      
    this.score = this.score + 1;
    }

    if(this.Corona == true){
 
    this.score = this.score + 1;
    }

    if(this.Mozzarella == true){
      
    this.score = this.score + 1;
    }

    if(this.Paprika == true){
     
    this.score = this.score + 1;
    }

    if(this.WhiteChristmas == true){
   
    this.score = this.score + 1;
    }
    if(this.Fenry == true){
      
    this.score = this.score + 1;
    }
    if(this.RoxyMusic == true){
   
    this.score = this.score + 1;
    }
    if(this.MadonnaLouis == true){
      
    this.score = this.score + 1;
    }
    if(this.RobBowman == true){
    
    this.score = this.score + 1;
    }
    if(this.FiftyThree == true){
      
    this.score = this.score + 1;
    }
    if(this.Sailor == true){
      
    this.score = this.score + 1;
    }
    if(this.AustinPowers == true){
      
    this.score = this.score + 1;
    }
    if(this.Sixtoes == true){
      
    this.score = this.score + 1;
    }
    if(this.Terricelli == true){
   
    this.score = this.score + 1;
    }
    if(this.byr == true){
     
    this.score = this.score + 1;
    }
    if(this.Aliminium == true){
    
    this.score = this.score + 1;
    }
    if(this.Mercury == true){
   
    this.score = this.score + 1;
    }
    if(this.fivenines == true){
      
    this.score = this.score + 1;
    }
    if(this.Clavical == true){
      
    this.score  = this.score + 1;
    }
    if(this.ninetyseven == true){
     
    this.score = this.score + 1;
    }
    if(this.Ganges == true){
      
    this.score  = this.score + 1;
    }
    if(this. fourthousand == true){
     
    this.score = this.score + 1;
    }

    console.log(this.score);
 } 
}

import { Component, OnInit } from '@angular/core';
import gamesData from '../../assets/data.json'
import { Data } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  games: any

  constructor(){

  }
  ngOnInit(): void{
    if(gamesData){
      this.games = gamesData.games
      console.log(this.games)
    }
  }
}

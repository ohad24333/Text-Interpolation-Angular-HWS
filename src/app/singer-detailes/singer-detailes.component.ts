import { Component, OnInit } from '@angular/core';
import { Singer } from 'src/interfaces/singer';

@Component({
  selector: 'app-singer-detailes',
  templateUrl: './singer-detailes.component.html',
  styleUrls: ['./singer-detailes.component.css']
})
export class SingerDetailesComponent implements OnInit {

  constructor() { }

  singer:Singer = {
    firstName : "idan",
    lastName : "raichel",
    age : 40,
    songs : ["Ve'Eem Tavo'ee","Mimaamakim","kozim"],
    imgsrc : "https://www.ipo.co.il/wp-content/uploads/2021/11/%D7%A2%D7%99%D7%93%D7%9F-%D7%A8%D7%99%D7%99%D7%9B%D7%9C-%D7%A6%D7%99%D7%9C%D7%95%D7%9D-%D7%92%D7%91%D7%A8%D7%99%D7%90%D7%9C-%D7%91%D7%94%D7%A8%D7%9C%D7%99%D7%94-%D7%90%D7%99%D7%9B%D7%95%D7%AA-%D7%92%D7%91%D7%95%D7%94%D7%94-750-440.jpg"

  }
  ngOnInit(): void {
  }

  getAnotherDetaile(){
    return "Idan Raichel Had 9 Albums";
  }
}

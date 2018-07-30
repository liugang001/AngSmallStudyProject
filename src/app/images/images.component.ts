import {Component, OnDestroy, OnInit} from '@angular/core';



@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent implements OnInit{


  defaultImage = "assets/img/timg.jpg";
  offset = 20;
  cover="assets/img/1.jpg";

  ngOnInit() {}

}

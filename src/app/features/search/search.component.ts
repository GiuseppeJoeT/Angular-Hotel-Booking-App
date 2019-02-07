import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Hotel } from './../../model/hotel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  text = 'Milan';
  // risultato search
  hotels: Hotel[];

  constructor(private http: HttpClient ) {
    this.searchHotels(this.text);
  }

  searchHotels(text: string) {
    this.text = text;

    // chiamata GET alle REST API del mock server che ritornerà un array di Hotel[]
    this.http.get<Hotel[]>('http://localhost:3000/hotels?q=' + text)
      .subscribe(result => {
        // console.log(result);
        this.hotels = result;
      });
  }

}

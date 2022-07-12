import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Profile{
  constructor(
    public id: number,
    public full_name:string,
    public address: string,
    public email: string,
    public location: string,
    public profile_image:File,
    public bio:string,
  ) {
  }
}
@Component({
  selector: 'app-tourist-profile',
  templateUrl: './tourist-profile.component.html',
  styleUrls: ['./tourist-profile.component.css']
})
export class TouristProfileComponent implements OnInit {
   profile! : Profile[];

  constructor(
    private http: HttpClient) { }

  ngOnInit(): void {
    this.getprofile();
  }
  getprofile(){
    this.http.get<any>('http://127.0.0.1:8000/api/UpdateUserProfile/').subscribe(
      response => {
        console.log(response);
        this.profile = response;
      }
    );
  }
  filteredImages(value: any) {
    const imageString = value.replace('http://127.0.0.1:8000/media/', 'http://127.0.0.1:8000/media/')
    return imageString
  }
}

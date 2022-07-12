import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    // private http:HttpClient,
  ) { }

  ngOnInit(): void {
  }
//   name: string='';
// file: any;
// getName(name: string){
//   this.name=name;
// }
// getFile(event: any){
//   this.file=event.target.files[0];
//   console.log('file', this.file);
// }
// submitData(){
// // create formData object
// let formData = new FormData();
// formData.set("name", this.name)
// formData.set("file", this.file)
// // submit this data to the API
// this.http.post("http://localhost:4200/upload/uploadFile",formData).subscribe((response) => {} )
// }
}




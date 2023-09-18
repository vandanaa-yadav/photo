import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Photo } from './photo';
import { PhotoService } from 'src/app/photo.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  myForm: FormGroup;
 
  constructor(private fb: FormBuilder, private photoService: PhotoService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      // Define your form controls and their initial values and  s
    
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Subject:['',Validators.required],
      Message:['',Validators.required]

      // ...
    });
  }

  onSubmit() {
debugger
    var data = this.myForm.value as Photo;
    this.photoService.AddPhoto(data).subscribe(res => {
      console.log(`done - ${res}`);
      
    })
    alert("data save successfuly save");
  }
}

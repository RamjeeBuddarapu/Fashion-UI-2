import { Component,Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-rating',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user-rating.component.html',
  styleUrl: './user-rating.component.css'
})
export class UserRatingComponent {
  @Input() rating:number=0;
  editMode=false;
  newRating:number=0;

  submit(){
    this.rating=this.newRating;
    this.editMode=false;
  }

  edit() {
    this.editMode=true;
    this.newRating=this.rating;
  }

  delete(){
    console.log(this.rating);
  }
  
  


}
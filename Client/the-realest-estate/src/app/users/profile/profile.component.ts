import { Component, OnInit } from '@angular/core';
import { Estate } from 'src/app/types/Estate';
import { Rent } from 'src/app/types/Rent';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  email: string | null | undefined;
  listings: any[] | undefined;

  ngOnInit(): void {
    this.email = localStorage.getItem('email');
  }
}

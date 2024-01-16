import { Component } from '@angular/core';
import { UsersService } from '../../users.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  constructor(private userService: UsersService, private router: Router){}

  data: any

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required)
  })

  addUser(){
    this.data = this.form.value
    this.userService.addUser(this.data).subscribe(data => {
      this.router.navigate(['/']) // redirect to homepage
    })
  }
}

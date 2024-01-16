import { Component } from '@angular/core';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-view-users',
  standalone: true,
  imports: [],
  templateUrl: './view-users.component.html',
  styleUrl: './view-users.component.css'
})
export class ViewUsersComponent {
  users: any | undefined

  constructor(private userService: UsersService){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data
      console.log(data)
    })
  }
  deleteUser(id: number){
    this.userService.deleteUserById(id).subscribe(data => {
      console.log(data)
      this.ngOnInit() // refresh It 
    })
  }
}

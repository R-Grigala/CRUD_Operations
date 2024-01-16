import { Injectable } from '@angular/core';
import User from './User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url: string = "http://localhost:8000/api/"

  constructor(private http: HttpClient) { }

  // getUsers - url+users/
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.url}+user/`)
  }

  // getUserById - url + user/ :id
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}+user/+${id}`)
  }

  // addUser - url + users
  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}+users/`, user)
  }

  // updateUser - url + user/:id
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.url}user/${id}/`, user)
  }

  // deleteUserById - url+user/:id
  deleteUserById(id: number): Observable<User> {
    return this.http.delete<User>(`${this.url}user/${id}`)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, tap } from 'rxjs/operators';
import * as moment from 'moment';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authenticatedSubject: BehaviorSubject<boolean>;
  public authenticated: Observable<boolean>;

  constructor(private http: HttpClient) {
    this.authenticatedSubject = new BehaviorSubject<boolean>(localStorage.getItem('expires_at') !== null);
    this.authenticated = this.authenticatedSubject.asObservable();
  }

  login(email: string, password: string) {
    return this.http.post(`//${environment.api}/auth/login`, { email, password }).pipe(
      tap(r => { this.setSession(r); }),
      shareReplay()
    );
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expires_in, 'second');
    console.log(expiresAt.valueOf());
    this.authenticatedSubject.next(authResult.access_token);
    localStorage.setItem('access_token', authResult.access_token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  public get authenticatedValue(): boolean {
    return this.authenticatedSubject.value;
  }

  get token() {
    return localStorage.getItem('access_token');
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
    this.authenticatedSubject.next(false);
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}

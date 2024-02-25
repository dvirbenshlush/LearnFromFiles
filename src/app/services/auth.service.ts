import { Injectable } from '@angular/core';
import { Auth, authState, signInWithEmailAndPassword } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { User, createUserWithEmailAndPassword, signOut, UserInfo, getAuth } from 'firebase/auth';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: any;


  constructor(private auth: Auth, private router: Router) { 
    this.user$ = authState;
  }

  //login method
  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/home']);
      debugger
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

  
  //register method
  register(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password).then(() => {
      alert('registerition seccessed')
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }
    
  //logout method
  logout() {
    signOut(this.auth).then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  }

  getCurrentUserEmail(): Observable<string | null> {
    return new Observable<string | null>(observer => {
      this.auth.onAuthStateChanged(user => {
        if (user) {
          observer.next(user.email);
        } else {
          observer.error('User not authenticated');
        }
        observer.complete();
      });
    });
  }
}
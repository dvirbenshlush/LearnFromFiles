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
  isLoggedIn: boolean = false;


  constructor(private auth: Auth, private router: Router) { 
    this.user$ = authState;
  }

  //login method
  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password).then(() => {
      // sessionStorage.setItem('token', 'true');
      sessionStorage.setItem('isLoggedIn', 'true');
      this.isLoggedIn = true;
      this.router.navigate(['/home']);
    }, err => {
      alert(err.message);
      sessionStorage.setItem('isLoggedIn', 'false');
      this.isLoggedIn = false;
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
      sessionStorage?.removeItem('isLoggedIn')
      this.isLoggedIn = false;
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
        } else if(this.router.url !== '/'){
          observer.error('User not authenticated, '+ user);
        }
        observer.complete();
      });
    });
  }

  isLoginSuccessed() {
    // this.user$.subscribe(response => {
      console.log(this.user$)
    // })
  }

  // canActivate(): Observable<boolean> {
    // return this.auth.currentUser?.email;
  // }
}
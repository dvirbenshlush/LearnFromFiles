import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { firebaseConfig } from '../app/environments/environment'
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    importProvidersFrom(provideFirebaseApp(() => 
      initializeApp(firebaseConfig))), 
      importProvidersFrom(provideAuth(() => 
        getAuth()
        )), 
        importProvidersFrom(provideFirestore(() => 
        getFirestore()
        ))
      ]
  
};

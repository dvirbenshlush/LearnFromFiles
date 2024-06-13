import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { firebaseConfig } from '../app/environments/environment'
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { DatabaseModule, provideDatabase } from '@angular/fire/database';
import { getDatabase } from 'firebase/database';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    importProvidersFrom(provideFirebaseApp(() => 
      initializeApp(firebaseConfig))),
      DatabaseModule, 
      provideHttpClient(),
      importProvidersFrom(provideAuth(() => 
        getAuth()
        )), 
      importProvidersFrom(provideAuth(() => 
        getAuth()
        )), 
      importProvidersFrom(provideDatabase(() => 
        getDatabase()
        ))
      ]
  
};

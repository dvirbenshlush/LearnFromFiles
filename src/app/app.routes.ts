import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ChatComponent } from './pages/chat/chat.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    // {
    //     path: '',
    //     component: LayoutComponent,
    //     children:[
    //         {
    //             path: 'chat',
    //             component: ChatComponent
    //         }
    //     ]
    // }
    {
        path: 'home',
        component: ChatComponent
    }
];

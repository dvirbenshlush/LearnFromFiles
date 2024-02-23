import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ChatComponent } from './pages/chat/chat.component';
import { LayoutComponent } from './pages/layout/layout.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
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
        path: 'chat',
        component: ChatComponent
    }
];

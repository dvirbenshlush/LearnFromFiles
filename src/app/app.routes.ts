import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ChatComponent } from './pages/chat/chat.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { AuthGuard, canActivateGuard } from './guard/auth.guard';
import { RegisterComponent } from './pages/register/register.component';
import { HomeListComponent } from './pages/home-list/home-list.component';
import { HomeDetailsComponent } from './pages/home-details/home-details.component';

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
        canActivate: [canActivateGuard],
        component: HomeListComponent
    },
    {
        path: 'home/FindYourHouse',
        canActivate: [canActivateGuard],
        component: HomeListComponent
    },
    { 
        path: 'home/FindYourHouse/:id', 
        canActivate: [canActivateGuard], 
        component: HomeDetailsComponent 
    }


];

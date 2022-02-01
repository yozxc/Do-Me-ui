import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoMainComponent } from './modules/main/components/todo-main.component';
import { SignPageComponent } from './modules/auth/components/sign-page/sign-page.component';
import { RegisterPageComponent } from './modules/auth/components/register-page/register-page.component';

enum ROUTE {
    AUTH = 'auth',
    SIGNIN = 'signin',
    REGISTER = 'register',

    MAIN = 'main',
}

const routes: Routes = [
    { path: `${ROUTE.MAIN}`, component: TodoMainComponent },

    { path: ``, redirectTo: `${ROUTE.AUTH}/${ROUTE.SIGNIN}`, pathMatch: 'full' },
    { path: `${ROUTE.AUTH}/${ROUTE.SIGNIN}`, component: SignPageComponent },
    { path: `${ROUTE.AUTH}/${ROUTE.REGISTER}`, component: RegisterPageComponent },

    // todo : dev temp
    { path: `**`, redirectTo: `${ROUTE.MAIN}`, pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

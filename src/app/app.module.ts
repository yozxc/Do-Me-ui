import { AuthModule } from './modules/auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { WorkspaceModule } from './modules/workspace/workspace.module';
import { AppComponent } from './app.component';
import { ModalsControlerService } from './modules/modals/modals-controler.service';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, WorkspaceModule, AuthModule],
    providers: [ModalsControlerService],
    bootstrap: [AppComponent],
})
export class AppModule {}

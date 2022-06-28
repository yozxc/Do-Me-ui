import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ProjectsService } from '@core/services/data/projects/projects.service';

import { AppRoutingModule } from './app-routing.module';
import { WorkspaceModule } from './modules/workspace/workspace.module';
import { AuthModule } from './modules/auth/auth.module';
import { ModalsModule } from './modules/modals/modals.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, WorkspaceModule, AuthModule, ModalsModule],
    providers: [ProjectsService],
    bootstrap: [AppComponent]
})
export class AppModule {}

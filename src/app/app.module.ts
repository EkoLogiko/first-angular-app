import { NgModule } from '@angular/core';
import { App } from './app';
import { HeaderComponent } from './header/header';
import { User } from './user/user';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [App, HeaderComponent, User],
  bootstrap: [App],
  imports: [BrowserModule, FormsModule, RouterOutlet, SharedModule, TasksModule],
})
export class AppModule {}

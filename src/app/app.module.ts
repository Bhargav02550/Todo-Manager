import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { RightSideComponent } from './components/right-side/right-side.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './components/right-side/todo-list/todo-list.component';
import { InprogressComponent } from './components/right-side/inprogress/inprogress.component';
import { InreviewComponent } from './components/right-side/inreview/inreview.component';
import { CompletedComponent } from './components/right-side/completed/completed.component';
import { CdkDrag, DragDropModule } from '@angular/cdk/drag-drop';
import { LoginComponent } from './components/login/login.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftSideComponent,
    RightSideComponent,
    PopUpComponent,
    TodoListComponent,
    InprogressComponent,
    InreviewComponent,
    CompletedComponent,
    LoginComponent,
    DashboardLayoutComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    DragDropModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync(), provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule { }

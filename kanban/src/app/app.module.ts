import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { RouterModule,Routes } from '@angular/router';

import { DragDropModule } from '@angular/cdk/drag-drop'
import { KanbanHttpService } from './kanban-http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    RouterModule.forRoot([
      { path: '', component:MainViewComponent }
    ]),
    HttpClientModule,
    FormsModule
  ],
  providers: [KanbanHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStoryPointComponent } from './core/add-story-point/add-story-point.component';
import { ListStoriesComponent } from './core/list-stories/list-stories.component';
import { PlanStoriesComponent } from './core/plan-stories/plan-stories.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddStoryPointComponent,
    ListStoriesComponent,
    PlanStoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginformComponent } from './loginform/loginform.component';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from'@angular/forms';
import { SignupComponent } from './signup/signup.component';
import {MatRadioModule} from '@angular/material/radio';
import { SignupdetailsComponent } from './signupdetails/signupdetails.component';
import { OwncreationComponent } from './owncreation/owncreation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import { GoodReceiptComponent } from './good-receipt/good-receipt.component';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import { IgxDoughnutChartModule } from 'igniteui-angular-charts';
import { FusionChartsModule } from 'angular-fusioncharts';
 
// // Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);
// chart ng2
import { ChartsModule } from 'ng2-charts'
// list
import {MatListModule} from '@angular/material/list';
// dialogue box
import {MatDialogModule} from '@angular/material/dialog';
import { DialogueComponent } from './dialogue/dialogue.component';
import { DialogueUpdateComponent } from './dialogue-update/dialogue-update.component';
// snackbar
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { IdcomponentdialogComponent } from './idcomponentdialog/idcomponentdialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    SignupComponent,
    SignupdetailsComponent,
    OwncreationComponent,
    GoodReceiptComponent,
    DialogueComponent,
    DialogueUpdateComponent,
    IdcomponentdialogComponent,
    

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatSidenavModule,
     FlexLayoutModule,
     MatDividerModule,
     MatSelectModule,
     MatTableModule,
     HttpClientModule,
     IgxDoughnutChartModule,
    //  FusionCharts,
//  FusionChartsModule,
ChartsModule,
MatListModule,
MatDialogModule,
MatSnackBarModule
   
     
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

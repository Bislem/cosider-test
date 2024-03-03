import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ViewInvoiceDetailsDialogComponent } from './dialogs/view-invoice-details-dialog/view-invoice-details-dialog.component';
import { TtcPipe } from './pipes/ttc.pipe';
import { ItemTtcPipe } from './pipes/item-ttc.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TvaPipe } from './pipes/tva.pipe';
import { HtPipe } from './pipes/ht.pipe';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import 'moment/locale/fr';


registerLocaleData(localeFr,'fr');

@NgModule({
  declarations: [
    AppComponent,
    ViewInvoiceDetailsDialogComponent,
    TtcPipe,
    ItemTtcPipe,
    TvaPipe,
    HtPipe,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

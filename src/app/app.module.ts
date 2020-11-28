import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from './components/card.module';
import { RestangularModule} from 'ngx-restangular';
import { MY_apiKey } from './config';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CardModule,
    RestangularModule.forRoot(RestangularConfigFactory),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl('https://cboitest-fef7.restdb.io/rest/'); //just a test database, nothing sensitive
  RestangularProvider.setDefaultHeaders({ 'apikey': MY_apiKey });
  RestangularProvider.setRestangularFields({ id: "_id" });
}

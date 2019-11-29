import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ThreatsHttpService, UsersHttpService } from '.';
import { HttpService } from './http.service';

@NgModule({
	providers: [HttpService, ThreatsHttpService, UsersHttpService],
	imports: [HttpClientModule],
})
export class HttpModule { }

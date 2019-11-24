import { NgModule } from '@angular/core';

import { ThreatsHttpService, UsersHttpService } from '.';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	providers: [ThreatsHttpService, UsersHttpService],
	imports: [HttpClientModule],
})
export class HttpModule { }

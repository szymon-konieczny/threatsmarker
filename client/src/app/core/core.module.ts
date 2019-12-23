import { NgModule } from '@angular/core';

import { HttpModule } from './http/http.module';
import { ErrorModule } from './error/error.module';
import { AlertModule } from './alert/alert.module';

@NgModule({
	imports: [
		ErrorModule,
		AlertModule,
		HttpModule,
	],
	exports: [
		ErrorModule,
		AlertModule,
	]
})
export class CoreModule { }

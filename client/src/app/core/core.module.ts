import { NgModule } from '@angular/core';

import { HttpModule } from './http/http.module';
import { AlertModule } from './alert/alert.module';

@NgModule({
	imports: [
		AlertModule,
		HttpModule,
	],
	exports: [
		AlertModule,
	]
})
export class CoreModule { }

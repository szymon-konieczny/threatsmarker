import { NgModule } from '@angular/core';

import { HttpModule } from './http/http.module';
import { ErrorModule } from './error/error.module';

@NgModule({
	imports: [
		ErrorModule,
		HttpModule,
	],
	exports: [
		ErrorModule,
	]
})
export class CoreModule { }

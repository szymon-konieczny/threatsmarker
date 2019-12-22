import { NgModule } from '@angular/core';

import { AlertSnackBarComponent } from './alert-snackbar.component';
import { AlertService } from './alert.service';
import { SharedModule } from '@shared/shared.module';

@NgModule({
	imports: [SharedModule],
	declarations: [AlertSnackBarComponent],
	providers: [AlertService],
	entryComponents: [
		AlertSnackBarComponent,
	]
})
export class AlertModule { }

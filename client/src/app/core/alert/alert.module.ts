import { NgModule } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

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

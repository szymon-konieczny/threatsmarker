import { Component, Inject, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef, MatSnackBarContainer, MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

import { Alert } from './alert.service';

enum AlertTypes {
	ERROR = 'error',
	INFO = 'info',
}

@Component({
	selector: 'app-snackbar',
	templateUrl: './alert-snackbar.component.html',
	styleUrls: ['./alert-snackbar.component.scss'],
})
export class AlertSnackBarComponent {
	public alertType = this.data.type === AlertTypes.ERROR ? AlertTypes.ERROR : AlertTypes.INFO;

	constructor(
		public snackBarRef: MatSnackBarRef<AlertSnackBarComponent>,
		@Inject(MAT_SNACK_BAR_DATA) public data: Alert,
	) { }
}

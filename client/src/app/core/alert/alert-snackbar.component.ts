import { Component, Inject, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef, MatSnackBarContainer, MatSnackBar, MatSnackBarConfig } from '@angular/material';

import { Alert } from './alert.service';

@Component({
	selector: 'app-snackbar',
	templateUrl: './alert-snackbar.component.html',
	styleUrls: ['./alert-snackbar.component.scss'],
})
export class AlertSnackBarComponent {
	public alertType: string;

	constructor(
		public snackBarRef: MatSnackBarRef<AlertSnackBarComponent>,
		@Inject(MAT_SNACK_BAR_DATA) public data: Alert,
	) {
		this.alertType = data.type === 'error' ? data.type : 'info';
	}
}

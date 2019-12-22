import { Component, Inject, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef, MatSnackBarContainer, MatSnackBar, MatSnackBarConfig } from '@angular/material';

import { Alert } from './alert.service';

@Component({
	templateUrl: 'alert-snackbar.component.html',
	styles: ['./app.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class AlertSnackBarComponent {
	public alertType: string;

	constructor(
		@Inject(MAT_SNACK_BAR_DATA) public data: Alert,
	) {
		this.alertType = data.type === 'error' ? 'error' : 'info';
	}
}

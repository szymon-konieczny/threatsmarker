import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertSnackBarComponent } from './alert-snackbar.component';

export type AlertType = 'info' | 'error';

export interface Alert {
	type: AlertType;
	message: string;
	msToClose?: number;
}

@Injectable({
	providedIn: 'root'
})
export class AlertService {
	constructor(private snackBar: MatSnackBar) { }

	public openSnackBar(message: string, type: string) {
		const duration = 3000;
		const verticalPosition = 'top';
		const panelClass = 'custom-snackbar';

		this.snackBar.openFromComponent(AlertSnackBarComponent, {
			duration,
			verticalPosition,
			panelClass,
			data: { message, type, },
		});
	}
}

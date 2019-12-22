import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as MAT_MODULES from '@angular/material';

const materialModules = [
	MAT_MODULES.MatListModule,
	MAT_MODULES.MatSidenavModule,
	MAT_MODULES.MatFormFieldModule,
	MAT_MODULES.MatDialogModule,
	MAT_MODULES.MatNativeDateModule,
	MAT_MODULES.MatCardModule,
	MAT_MODULES.MatPaginatorModule,
	MAT_MODULES.MatIconModule,
	MAT_MODULES.MatToolbarModule,
	MAT_MODULES.MatButtonModule,
	MAT_MODULES.MatSelectModule,
	MAT_MODULES.MatTabsModule,
	MAT_MODULES.MatTableModule,
	MAT_MODULES.MatExpansionModule,
	MAT_MODULES.MatCheckboxModule,
	MAT_MODULES.MatInputModule,
	MAT_MODULES.MatSnackBarModule,
	MAT_MODULES.MatAutocompleteModule,
	MAT_MODULES.MatOptionModule,
	MAT_MODULES.MatMenuModule,
	MAT_MODULES.MatProgressSpinnerModule,
	MAT_MODULES.MatSlideToggleModule,
];

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		...materialModules,
	],
	exports: [
		CommonModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		...materialModules,
	],
})
export class SharedModule { }

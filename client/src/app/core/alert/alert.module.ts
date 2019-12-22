import { NgModule } from '@angular/core';

import { AlertContainerComponent } from './alert-container/alert-container.component';
import { AlertService } from './alert.service';

@NgModule({
	declarations: [AlertContainerComponent],
	providers: [AlertService],
})
export class AlertModule { }

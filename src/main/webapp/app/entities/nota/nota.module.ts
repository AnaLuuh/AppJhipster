import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TesteSharedModule } from '../../shared';
import {
    NotaService,
    NotaPopupService,
    NotaComponent,
    NotaDetailComponent,
    NotaDialogComponent,
    NotaPopupComponent,
    NotaDeletePopupComponent,
    NotaDeleteDialogComponent,
    notaRoute,
    notaPopupRoute,
} from './';

const ENTITY_STATES = [
    ...notaRoute,
    ...notaPopupRoute,
];

@NgModule({
    imports: [
        TesteSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        NotaComponent,
        NotaDetailComponent,
        NotaDialogComponent,
        NotaDeleteDialogComponent,
        NotaPopupComponent,
        NotaDeletePopupComponent,
    ],
    entryComponents: [
        NotaComponent,
        NotaDialogComponent,
        NotaPopupComponent,
        NotaDeleteDialogComponent,
        NotaDeletePopupComponent,
    ],
    providers: [
        NotaService,
        NotaPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TesteNotaModule {}

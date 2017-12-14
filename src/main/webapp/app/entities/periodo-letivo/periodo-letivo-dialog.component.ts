import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { PeriodoLetivo } from './periodo-letivo.model';
import { PeriodoLetivoPopupService } from './periodo-letivo-popup.service';
import { PeriodoLetivoService } from './periodo-letivo.service';
import { Aula, AulaService } from '../aula';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-periodo-letivo-dialog',
    templateUrl: './periodo-letivo-dialog.component.html'
})
export class PeriodoLetivoDialogComponent implements OnInit {

    periodoLetivo: PeriodoLetivo;
    isSaving: boolean;

    aulas: Aula[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private periodoLetivoService: PeriodoLetivoService,
        private aulaService: AulaService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.aulaService.query()
            .subscribe((res: ResponseWrapper) => { this.aulas = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.periodoLetivo.id !== undefined) {
            this.subscribeToSaveResponse(
                this.periodoLetivoService.update(this.periodoLetivo));
        } else {
            this.subscribeToSaveResponse(
                this.periodoLetivoService.create(this.periodoLetivo));
        }
    }

    private subscribeToSaveResponse(result: Observable<PeriodoLetivo>) {
        result.subscribe((res: PeriodoLetivo) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: PeriodoLetivo) {
        this.eventManager.broadcast({ name: 'periodoLetivoListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackAulaById(index: number, item: Aula) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-periodo-letivo-popup',
    template: ''
})
export class PeriodoLetivoPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private periodoLetivoPopupService: PeriodoLetivoPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.periodoLetivoPopupService
                    .open(PeriodoLetivoDialogComponent as Component, params['id']);
            } else {
                this.periodoLetivoPopupService
                    .open(PeriodoLetivoDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

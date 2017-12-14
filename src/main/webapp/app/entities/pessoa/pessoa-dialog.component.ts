import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Pessoa } from './pessoa.model';
import { PessoaPopupService } from './pessoa-popup.service';
import { PessoaService } from './pessoa.service';

@Component({
    selector: 'jhi-pessoa-dialog',
    templateUrl: './pessoa-dialog.component.html'
})
export class PessoaDialogComponent implements OnInit {

    pessoa: Pessoa;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private pessoaService: PessoaService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.pessoa.id !== undefined) {
            this.subscribeToSaveResponse(
                this.pessoaService.update(this.pessoa));
        } else {
            this.subscribeToSaveResponse(
                this.pessoaService.create(this.pessoa));
        }
    }

    private subscribeToSaveResponse(result: Observable<Pessoa>) {
        result.subscribe((res: Pessoa) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: Pessoa) {
        this.eventManager.broadcast({ name: 'pessoaListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-pessoa-popup',
    template: ''
})
export class PessoaPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private pessoaPopupService: PessoaPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.pessoaPopupService
                    .open(PessoaDialogComponent as Component, params['id']);
            } else {
                this.pessoaPopupService
                    .open(PessoaDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

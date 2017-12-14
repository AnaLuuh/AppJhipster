import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Pessoa } from './pessoa.model';
import { PessoaService } from './pessoa.service';
import { Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-pessoa',
    templateUrl: './pessoa.component.html'
})
export class PessoaComponent implements OnInit, OnDestroy {
pessoas: Pessoa[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private pessoaService: PessoaService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.pessoaService.query().subscribe(
            (res: ResponseWrapper) => {
                this.pessoas = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInPessoas();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Pessoa) {
        return item.id;
    }
    registerChangeInPessoas() {
        this.eventSubscriber = this.eventManager.subscribe('pessoaListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}

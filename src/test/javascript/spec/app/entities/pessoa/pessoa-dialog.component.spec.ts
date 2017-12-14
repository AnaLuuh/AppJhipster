/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { TesteTestModule } from '../../../test.module';
import { PessoaDialogComponent } from '../../../../../../main/webapp/app/entities/pessoa/pessoa-dialog.component';
import { PessoaService } from '../../../../../../main/webapp/app/entities/pessoa/pessoa.service';
import { Pessoa } from '../../../../../../main/webapp/app/entities/pessoa/pessoa.model';

describe('Component Tests', () => {

    describe('Pessoa Management Dialog Component', () => {
        let comp: PessoaDialogComponent;
        let fixture: ComponentFixture<PessoaDialogComponent>;
        let service: PessoaService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [TesteTestModule],
                declarations: [PessoaDialogComponent],
                providers: [
                    PessoaService
                ]
            })
            .overrideTemplate(PessoaDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(PessoaDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(PessoaService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new Pessoa(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.pessoa = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'pessoaListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new Pessoa();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.pessoa = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'pessoaListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});

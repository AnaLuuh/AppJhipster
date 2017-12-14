/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { TesteTestModule } from '../../../test.module';
import { PessoaComponent } from '../../../../../../main/webapp/app/entities/pessoa/pessoa.component';
import { PessoaService } from '../../../../../../main/webapp/app/entities/pessoa/pessoa.service';
import { Pessoa } from '../../../../../../main/webapp/app/entities/pessoa/pessoa.model';

describe('Component Tests', () => {

    describe('Pessoa Management Component', () => {
        let comp: PessoaComponent;
        let fixture: ComponentFixture<PessoaComponent>;
        let service: PessoaService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [TesteTestModule],
                declarations: [PessoaComponent],
                providers: [
                    PessoaService
                ]
            })
            .overrideTemplate(PessoaComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(PessoaComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(PessoaService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new Pessoa(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.pessoas[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});

/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { TesteTestModule } from '../../../test.module';
import { PessoaDetailComponent } from '../../../../../../main/webapp/app/entities/pessoa/pessoa-detail.component';
import { PessoaService } from '../../../../../../main/webapp/app/entities/pessoa/pessoa.service';
import { Pessoa } from '../../../../../../main/webapp/app/entities/pessoa/pessoa.model';

describe('Component Tests', () => {

    describe('Pessoa Management Detail Component', () => {
        let comp: PessoaDetailComponent;
        let fixture: ComponentFixture<PessoaDetailComponent>;
        let service: PessoaService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [TesteTestModule],
                declarations: [PessoaDetailComponent],
                providers: [
                    PessoaService
                ]
            })
            .overrideTemplate(PessoaDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(PessoaDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(PessoaService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new Pessoa(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.pessoa).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});

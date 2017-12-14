import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TestePermissaoModule } from './permissao/permissao.module';
import { TesteUsuarioModule } from './usuario/usuario.module';
import { TestePessoaModule } from './pessoa/pessoa.module';
import { TesteAlunoModule } from './aluno/aluno.module';
import { TesteProfessorModule } from './professor/professor.module';
import { TesteFaltaModule } from './falta/falta.module';
import { TesteNotaModule } from './nota/nota.module';
import { TesteTurmaModule } from './turma/turma.module';
import { TesteDisciplinaModule } from './disciplina/disciplina.module';
import { TesteAulaModule } from './aula/aula.module';
import { TestePeriodoLetivoModule } from './periodo-letivo/periodo-letivo.module';
import { TesteEntregaModule } from './entrega/entrega.module';
import { TesteAtividadeModule } from './atividade/atividade.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        TestePermissaoModule,
        TesteUsuarioModule,
        TestePessoaModule,
        TesteAlunoModule,
        TesteProfessorModule,
        TesteFaltaModule,
        TesteNotaModule,
        TesteTurmaModule,
        TesteDisciplinaModule,
        TesteAulaModule,
        TestePeriodoLetivoModule,
        TesteEntregaModule,
        TesteAtividadeModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TesteEntityModule {}

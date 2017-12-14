import { BaseEntity } from './../../shared';

export class Turma implements BaseEntity {
    constructor(
        public id?: number,
        public descricao?: string,
        public professor?: BaseEntity,
        public alunos?: BaseEntity[],
        public aulas?: BaseEntity[],
        public aula?: BaseEntity,
    ) {
    }
}

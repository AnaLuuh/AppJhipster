import { BaseEntity } from './../../shared';

export class Nota implements BaseEntity {
    constructor(
        public id?: number,
        public valor?: number,
        public aluno?: BaseEntity,
        public atividade?: BaseEntity,
    ) {
    }
}

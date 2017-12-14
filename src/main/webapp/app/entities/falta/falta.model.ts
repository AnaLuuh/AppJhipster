import { BaseEntity } from './../../shared';

export class Falta implements BaseEntity {
    constructor(
        public id?: number,
        public quantidade?: number,
        public aluno?: BaseEntity,
        public aula?: BaseEntity,
        public periodoLetivo?: BaseEntity,
    ) {
    }
}

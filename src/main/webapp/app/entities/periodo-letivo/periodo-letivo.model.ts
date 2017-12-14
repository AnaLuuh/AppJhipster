import { BaseEntity } from './../../shared';

export class PeriodoLetivo implements BaseEntity {
    constructor(
        public id?: number,
        public duracao?: number,
        public aula?: BaseEntity,
        public aulas?: BaseEntity[],
        public faltas?: BaseEntity[],
    ) {
    }
}

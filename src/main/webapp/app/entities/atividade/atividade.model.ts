import { BaseEntity } from './../../shared';

export class Atividade implements BaseEntity {
    constructor(
        public id?: number,
        public prazo?: string,
        public professor?: BaseEntity,
        public disciplina?: BaseEntity,
        public entregas?: BaseEntity[],
        public notas?: BaseEntity[],
    ) {
    }
}

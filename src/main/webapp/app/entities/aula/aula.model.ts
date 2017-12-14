import { BaseEntity } from './../../shared';

export class Aula implements BaseEntity {
    constructor(
        public id?: number,
        public descricao?: string,
        public horario?: string,
        public turma?: BaseEntity,
        public faltas?: BaseEntity[],
        public turmas?: BaseEntity[],
        public periodos?: BaseEntity[],
        public periodoLetivo?: BaseEntity,
    ) {
    }
}

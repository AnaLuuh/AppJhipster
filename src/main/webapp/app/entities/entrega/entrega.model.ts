import { BaseEntity } from './../../shared';

export class Entrega implements BaseEntity {
    constructor(
        public id?: number,
        public data?: string,
        public aluno?: BaseEntity,
        public atividade?: BaseEntity,
    ) {
    }
}

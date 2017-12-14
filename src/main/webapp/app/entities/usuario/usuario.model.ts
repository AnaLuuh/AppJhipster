import { BaseEntity } from './../../shared';

export class Usuario implements BaseEntity {
    constructor(
        public id?: number,
        public login?: string,
        public permissao?: BaseEntity,
        public pessoa?: BaseEntity,
    ) {
    }
}

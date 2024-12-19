export class Itens {
    constructor(
        public nome:string,
        public atributos:string,
        public caracteristicas:string,
        public tier:number,
        public categoria:string,
        public src:string,
        public passiva?:string,
    ){}
}
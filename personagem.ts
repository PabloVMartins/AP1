export default class Personagem {

    constructor(
        protected _nome: string,
        protected _HPMax: number,
        protected _vida: number,
        protected _destreza: number,
        protected _ataque: number,
        protected _esquiva: number,
        protected _defesa: number,
        protected _xp: number
    ) { }

    public get nome(): string {
        return this._nome;
    }
    public get HPMax(): number {
        return this._HPMax;
    }
    public get vida(): number {
        return this._vida;
    }
    public get destreza(): number {
        return this._destreza
    }
    public get ataque(): number {
        return this._ataque
    }
    public get esquiva(): number {
        return this._esquiva
    }
    public get defesa(): number {
        return this._defesa
    }
    public get xp(): number {
        return this._xp
    }

    public set vida(valor: number) {
        this._vida = valor;
    }
}
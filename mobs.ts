import Personagem from "./person";

export default class Mobs {
    constructor(
        private _nome: string,
        private _HPMax: number,
        private _vida: number,
        private _destreza: number,
        private _ataque: number,
        private _esquiva: number,
        private _defesa: number,
        private _xp: number

    ) {}

    public get nome() : string {
        return this._nome;
    }
    public get HPMax() : number {
        return this._HPMax;
    }
    public get vida() : number {
        return this._vida;
    }
    public get destreza() : number {
        return this._destreza
    }
    public get ataque() : number {
        return this._ataque
    }
    public get esquiva() : number {
        return this._esquiva
    }
    public get defesa() : number {
        return this._defesa
    }
    public get xp() : number {
        return this._xp
    }

    
    public set setVida(valor : number) {
        this._vida = valor;
    }
    
    contraAtaque(person: Personagem): string {
        let dano = 0;
        let acerto = false;

        if (Math.random() * (this._ataque + this._destreza) > Math.random() * (person.ataque + person.destreza)) {
            acerto = true;
            dano = this._ataque - person.defesa;
            if (this._ataque <= person.defesa) {
                dano = 1;
            }
            person.setVida = person.vida - dano;
        }
        if (acerto) {
            return (`${person.nome} recebeu um golpe: ${dano}`);
        }
        return (`${person.nome} esquivou.`);
    }

    status(): string {
        return (
            "\nNome: " +
            this._nome +
            ("\nHP: " + this._vida + '/' + this._HPMax) +
            ("\nDestreza: " + this._destreza) +
            ("\nAtaque: " + this._ataque) +
            ("\nDefesa: " + this._defesa) +
            ("\nEsquiva: " + this._esquiva)
                  
        );
    }
}


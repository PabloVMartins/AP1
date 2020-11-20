import Heroi from "./heroi";
import Personagem from "./personagem";
export default class Mobs extends Personagem {

    constructor(
        _nome: string,
    ) {
        if ( _nome == 'Slime') 
            super(_nome, 5 + Math.random() * 10, 0, 5 + Math.random() * 15, 5 + Math.round(Math.random() * 10), 3 + Math.random() * 10, 3 + Math.round(Math.random() * 10), 5);
        else if (_nome == 'Goblin')
        super(_nome, 15 + Math.random() * 15, 0, 10 + Math.random() * 30, 10 + Math.round(Math.random() * 20), 6 + Math.random() * 15, 6 + Math.round(Math.random() * 15), 10);
        else if (_nome == 'Orc')
        super(_nome, 30 + Math.random() * 20, 0, 20 + Math.random() * 50, 20 + Math.round(Math.random() * 30), 12 + Math.random() * 20, 12 + Math.round(Math.random() * 20), 20);
        else if (_nome == 'Vampiro')
        super(_nome, 60 + Math.random() * 30, 0, 40 + Math.random() * 75, 40 + Math.round(Math.random() * 40), 24 + Math.random() * 30, 24 + Math.round(Math.random() * 30), 40);
        else if (_nome == 'Dragão')
        super(_nome, 240 + Math.random() * 50, 1, 120 + Math.random() * 100, 120 + Math.round(Math.random() * 50), 96 + Math.random() * 50, 96 + Math.round(Math.random() * 50), 100000000);
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
            person.vida = person.vida - dano;
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


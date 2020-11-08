import Personagem from "./person";

export default class Mobs {
    constructor(
        public nome: string,
        public HPMax: number,
        public vida: number,
        public destreza: number,
        public ataque: number,
        public esquiva: number,
        public defesa: number,
        public xp: number

    ) {}

    contraAtaque(person: Personagem): string {
        let dano = 0;
        let acerto = false;

        if (Math.random() * (this.ataque + this.destreza) > Math.random() * (person.ataque + person.destreza)) {
            acerto = true;
            dano = this.ataque - person.defesa;
            if (this.ataque <= person.defesa) {
                dano = 1;
            }
            person.vida -= dano;
        }
        if (acerto) {
            return (`${person.nome} recebeu um golpe: ${dano}`);
        }
        return (`${person.nome} esquivou.`);
    }
}


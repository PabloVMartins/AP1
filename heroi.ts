import Mobs from "./mobs";
import Personagem from "./personagem";

export default class Heroi extends Personagem {
    private _xpNecessario: number;
    private _level: number;

    constructor(_nome: string) {
        super(_nome, 15, 15, 15, 13, 13, 13, 0)
        this._xpNecessario = 5;
        this._level = 1;
    }

    status(): string {
        return (
            "\nNome: " +
            this._nome +
            ("\nNivel: " + this._level) +
            ("\nHP: " + this._vida + '/' + this._HPMax) +
            ("\nDestreza: " + this._destreza) +
            ("\nAtaque: " + this._ataque) +
            ("\nDefesa: " + this._defesa) +
            ("\nEsquiva: " + this._esquiva) +
            ("\nExperiência: " + this._xp + "\n")
        );
    }
    up(): void {
        this._HPMax += 2 + Math.round(Math.random() * 10);
        this._destreza += 2 + Math.round(Math.random() * 5);
        this._ataque += 2 + Math.round(Math.random() * 5);
        this._esquiva += 2 + Math.round(Math.random() * 5);
        this._defesa += 2 + Math.round(Math.random() * 5);
        this._level += 1;

    }
    matou(mobs: Mobs): string {
        let xpGanho

        this._xp += mobs.xp;

        xpGanho = `\nVocê ganhou ${mobs.xp} de experiência`
        while (this._xp >= this._xpNecessario) {
            xpGanho += "\nLevel Up!! \n" + "\n |  |  |  |\n V  V  V  V\n"
            this.up();
            this._xpNecessario *= 2
            xpGanho += this.status();
        }
        return (xpGanho);
    }
    descansar(): string {
        this._vida = this._HPMax;
        return ("HP Recuperado!");
    }
    atacar(mobs: Mobs): string {
        let dano = 0;
        let acerto = false;
        let frase = '';

        if (Math.random() * (this._ataque + this._destreza) > Math.random() * (mobs.esquiva + mobs.destreza)) {
            acerto = true;
            dano = this._ataque - mobs.defesa;
            if (this._ataque <= mobs.defesa) {
                dano = 1;
            }
            mobs.vida = mobs.vida - dano;
        }

        if (acerto) {
            frase = (`${mobs.nome} recebeu um golpe: ${dano}`);
        }
        else {
            frase = (`${mobs.nome} esquivou.`);
        }


        if (mobs.vida > 0) {
            frase += ('\n' + mobs.contraAtaque(this));
        }
        else {
            frase += (`\n${mobs.nome} foi derrotado!`)
        }


        if (this._vida <= 0) {
            frase += '\nVocê foi derrotado!'
        }
        return (frase);
    }

    Batalha(mobs: Mobs): string[] {

        let logBatalha: string[] = []
        mobs.vida = mobs.HPMax;


        for (let i = 0; this._vida > 0 && mobs.vida > 0; i++) {
            logBatalha.push(this.atacar(mobs));

        };

        if (this._vida <= 0) {
            this._vida = 1;
        }
        else {
            logBatalha.push(this.matou(mobs));
        }

        logBatalha.push('Fim da Batalha!!!')
        return (logBatalha);
    }

    definirNivel(Nivel: number): void {
        for (let i = 0; i < Nivel - 1; i++) {
            this.up();
        }
    }
}